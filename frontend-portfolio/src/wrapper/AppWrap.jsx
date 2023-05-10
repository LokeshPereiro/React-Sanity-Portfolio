import { NavigationDots, SocialMedia } from "../components";

export const AppWrap = (Component, idName, classNames) => {
  // High Order Component, so that we can provide SocialMedia icons and Pagination on right side
  const wrappedElemets = () => {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 Lokesh Pereiro</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
  return wrappedElemets;
};
