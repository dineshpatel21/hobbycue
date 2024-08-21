const AddYourOwn = () => {
  return (
    <div
      className="col-md-12"
      style={{
        backgroundColor: "rgba(247, 253, 255, 1)",
        padding: 100,
        paddingLeft: 100,
      }}
    >
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">
            <button
              style={{
                backgroundColor: "rgba(0, 150, 200, 1)",
                borderRadius: 100,
                width: 33.33,
                height: 33.33,
                borderWidth: 0,
                marginRight: 24,
              }}
            >
              <i class="bi bi-plus" style={{ color: "white" }}></i>
            </button>
            Add Your Own
          </h5>
          <p className="card-text">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <a href="#" className="btn btn-outline-primary">
            Add new
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwn;
