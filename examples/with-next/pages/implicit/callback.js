import Router from 'next/router';
import { ImplicitCallback } from 'use-okta';
export default () => <ImplicitCallback redirect={Router.push} />;
