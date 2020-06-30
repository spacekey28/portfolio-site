import React from "react"

import SocialLink from './social';

export default function SocialBanner(props) {
  return (
    <div className="social-banner">
      <div className="social-icons">
        <SocialLink linkUrl="https://www.linkedin.com/in/peter-son/" iconName="linkedin" iconSize="lg" />
        <SocialLink linkUrl="https://twitter.com/sukkison" iconName="twitter" iconSize="lg" />
        <SocialLink linkUrl="https://github.com/spacekey28" iconName="github" iconSize="lg" />
        <SocialLink linkUrl="mailto:peteson.me@gmail.com" iconName="envelope" iconSize="lg" />
      </div>
    </div>
  )
}