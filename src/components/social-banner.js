import React from "react"

import Social from './social';

export default function SocialBanner(props) {
  return (
    <div className="social-banner">
      <div className="social-icons">
        <Social linkUrl="https://www.linkedin.com/in/peter-son/" iconType="fab" iconName="linkedin" iconSize="lg" />
        <Social linkUrl="https://twitter.com/spacekey28" iconType="fab" iconName="twitter-square" iconSize="lg" />
        <Social linkUrl="https://github.com/spacekey28" iconType="fab" iconName="github-square" iconSize="lg" />
        <Social linkUrl="https://sonpeter.medium.com" iconType="fab" iconName="medium" iconSize="lg" />
        <Social linkUrl="mailto:peteson.me@gmail.com" iconType="fas" iconName="envelope-square" iconSize="lg" />
      </div>
    </div>
  )
}