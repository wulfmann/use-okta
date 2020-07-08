import { LOCAL_STORAGE_REFERRER_PATH, DEFAULT_REFERRER } from './constants';

type RedirectHandler = (path: string) => void;

const redirectHandler = (fn: RedirectHandler, path: string) => {
    let target = path;

    if (!target) {
        target = localStorage.getItem(LOCAL_STORAGE_REFERRER_PATH) || DEFAULT_REFERRER;
        localStorage.removeItem(LOCAL_STORAGE_REFERRER_PATH);
    }

    fn(target);
}

export interface ImplicitCallbackProps {
    redirect: RedirectHandler;
}

export const ImplicitCallback = ({ redirect }: ImplicitCallbackProps) => {
    return null;
};
