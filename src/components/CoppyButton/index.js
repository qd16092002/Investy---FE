/* eslint-disable no-undef */
import React from 'react'
import ClipboardJS from 'clipboard'
import { IconUploadCV } from '@src/assets/svgs'

class CopyButton extends React.Component {
  constructor(props) {
    super(props)
    this.buttonRef = React.createRef()
  }

  componentDidMount() {
    this.clipboard = new ClipboardJS(this.buttonRef.current, {
      text: () => window.location.href
    })

    this.clipboard.on('success', () => {
      alert('Successfully copied the path!')
    })

    this.clipboard.on('error', () => {
      alert('The path could not be copied.')
    })
  }

  componentWillUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy()
    }
  }

  render() {
    return (
      <div ref={this.buttonRef}>
        <IconUploadCV />
      </div>
    )
  }
}

export default CopyButton
