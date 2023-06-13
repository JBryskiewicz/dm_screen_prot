import {JSXElementConstructor, ReactElement} from "react";
import {render, RenderOptions} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

const RouterProviderWrapper: JSXElementConstructor<{children: ReactElement}> = ({children}) => <BrowserRouter>{children}</BrowserRouter>

export const renderWithRouter = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
    return render(ui, {wrapper: RouterProviderWrapper, ...options});
}