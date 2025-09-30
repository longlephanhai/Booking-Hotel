import bdrc from '../../assets/img/bg/bdrc-bg.jpg'

const BreadcrumbArea2 = () => {
  return (
    <> <section className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: `url(${bdrc})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12">
            <div className="breadcrumb-wrap text-left">
              <div className="breadcrumb-title">
                <h2>Team Details</h2>
                <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Team Details </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default BreadcrumbArea2