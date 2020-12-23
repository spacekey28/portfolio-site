import React from "react"

export default function Social(props) {
  return (
    <a className="social-icons__link" href={props.linkUrl} target="_blank" rel="noreferrer">
      <i className={`${props.iconType} fa-${props.iconName} fa-${props.iconSize}`} aria-hidden="true"></i>
    </a>
  )
}