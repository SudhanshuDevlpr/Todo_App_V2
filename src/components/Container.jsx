function Container({ children }) {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-4 ">
          <div className="col-10">
            <div className="card border-4">
              <div className="card-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Container;
