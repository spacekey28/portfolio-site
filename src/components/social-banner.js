import React from "react"

import Social from './social';

export default function SocialBanner(props) {
  return (
    <div className="social-banner">
      <div className="social-icons">
        <Social linkUrl="https://www.linkedin.com/in/peter-son/" iconName="linkedin" iconSize="lg" />
        <Social linkUrl="https://twitter.com/spacekey28" iconName="twitter" iconSize="lg" />
        <Social linkUrl="https://github.com/spacekey28" iconName="github" iconSize="lg" />
        <Social linkUrl="mailto:peteson.me@gmail.com" iconName="envelope" iconSize="lg" />
      </div>
    </div>
  )
}