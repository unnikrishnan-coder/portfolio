"use client"
import NavigationDots from '../components/NavigationDots';
import SocialMedia from '../components/SocialMedia';

const AppWrap = (Component,idName,classNames) => function HOC(){
  const currentYear = new Date().getFullYear()
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />

    <div className="app__wrapper app__flex">
        <Component/>
        <div className="copyright">
            <p className="p-text">@{currentYear} Unnikrishnan</p>
            <p className="p-text">All Rights Reserved</p>
        </div>
    </div>
    <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap