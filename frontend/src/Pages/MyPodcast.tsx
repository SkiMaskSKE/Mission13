function MyPodcast() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card mx-auto" style={{ width: '18rem' }}>
        <img src="./1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Joe Hilton Podcast</h5>
          <p className="card-text">
            If you click the link bellow it will send you to Joe Hilton's
            Podcast. Have Fun!!
          </p>
          <a
            href="https://baconsale.com/"
            className="btn btn-danger stretched-link"
          >
            Visit the Baconsale Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyPodcast;
