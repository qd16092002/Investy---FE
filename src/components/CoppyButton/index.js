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
      alert('Đã sao chép đường dẫn thành công!')
    })

    this.clipboard.on('error', () => {
      alert('Không thể sao chép đường dẫn.')
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
