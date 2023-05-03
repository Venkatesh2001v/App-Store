// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabButton = () => {
    setActiveTab(tabId)
  }

  const tabButton = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button
        className={`${tabButton}`}
        type="button"
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
