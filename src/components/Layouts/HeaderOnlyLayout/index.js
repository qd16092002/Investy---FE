import Header from '../components/Header'

function HeaderOnlyLayout({ children }) {
  return (
    <>
      <div
        style={{
          zIndex: '100'
        }}
      >
        <Header />
      </div>
      {children}
    </>
  )
}

export default HeaderOnlyLayout
