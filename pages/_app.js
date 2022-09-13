// this is the top-level component, goes across all components in this app
// use this to keep state across all diff pages.
// so add global css and etc here
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
