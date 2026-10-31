import React, { createContext, useContext, useState, useEffect, ReactNode, AnchorHTMLAttributes } from 'react';

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
  params: Record<string, string>;
  setParams: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const RouterContext = createContext<RouterContextType | null>(null);

function getPathname(): string {
  // Support hash routing fallback if opened via file:// or non-SPA hosting
  if (window.location.hash.startsWith('#/')) {
    return window.location.hash.slice(1);
  }
  return window.location.pathname || '/';
}

export const Router: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(getPathname());
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(getPathname());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    if (to === pathname) return;
    if (window.location.protocol === 'file:') {
      window.location.hash = '#' + to;
    } else {
      window.history.pushState({}, '', to);
      setPathname(to);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate, params, setParams }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useLocation must be used within a Router');
  return { pathname: context.pathname };
};

export const useNavigate = () => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useNavigate must be used within a Router');
  return context.navigate;
};

export const useParams = <T extends Record<string, string> = Record<string, string>>(): T => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useParams must be used within a Router');
  return context.params as T;
};

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '', activeClassName = '', onClick, ...rest }) => {
  const { pathname, navigate } = useContext(RouterContext) || { pathname: '/', navigate: () => {} };
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
  const combinedClasses = `${className} ${isActive ? activeClassName : ''}`.trim();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={combinedClasses} {...rest}>
      {children}
    </a>
  );
};

export interface RouteProps {
  path: string;
  element: ReactNode;
}

export const Route: React.FC<RouteProps> = () => null;

function matchRoute(routePath: string, currentPath: string): { matches: boolean; params: Record<string, string> } {
  const routeSegments = routePath.split('/').filter(Boolean);
  const currentSegments = currentPath.split('?')[0].split('/').filter(Boolean);

  if (routeSegments.length !== currentSegments.length) {
    return { matches: false, params: {} };
  }

  const params: Record<string, string> = {};

  for (let i = 0; i < routeSegments.length; i++) {
    const routeSeg = routeSegments[i];
    const currentSeg = currentSegments[i];

    if (routeSeg.startsWith(':')) {
      const paramName = routeSeg.slice(1);
      params[paramName] = decodeURIComponent(currentSeg);
    } else if (routeSeg !== currentSeg) {
      return { matches: false, params: {} };
    }
  }

  return { matches: true, params };
}

export const Routes: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname, setParams } = useContext(RouterContext) || { pathname: '/', setParams: () => {} };

  const childArray = React.Children.toArray(children) as React.ReactElement<RouteProps>[];

  let matchedElement: ReactNode = null;
  let matchedParams: Record<string, string> = {};

  for (const child of childArray) {
    if (!React.isValidElement(child)) continue;
    const { path, element } = child.props;

    // Exact root match
    if (path === '/' && (pathname === '/' || pathname === '')) {
      matchedElement = element;
      matchedParams = {};
      break;
    }

    if (path !== '/') {
      const { matches, params } = matchRoute(path, pathname);
      if (matches) {
        matchedElement = element;
        matchedParams = params;
        break;
      }
    }
  }

  useEffect(() => {
    setParams(matchedParams);
  }, [JSON.stringify(matchedParams)]);

  return <>{matchedElement || <NotFound />}</>;
};

const NotFound: React.FC = () => {
  const { navigate } = useContext(RouterContext) || { navigate: () => {} };
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6">
        <span className="text-3xl font-mono text-cyan-400">404</span>
      </div>
      <h1 className="text-3xl font-bold font-display text-white mb-2">Page Not Found</h1>
      <p className="text-slate-400 max-w-md mb-8">
        The requested neural route does not exist or has been relocated within the architecture.
      </p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
      >
        Return to Home Node
      </button>
    </div>
  );
};
