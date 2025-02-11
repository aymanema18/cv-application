export default function InitialPage() {
  return (
    <>
      <header></header>
      <main>
        <div className="h1-p-btn">
          <div className="h1-p">
            <h1>CV application</h1>
            <p>
              Create your CV today for <b>FREE</b>
            </p>
          </div>
          <button className="create-cv-btn">Create cv</button>
        </div>
        <img src="./images/cv-image.png" className="page-img" alt="cv" />
      </main>
      <script type="module" src="/src/main.jsx"></script>
    </>
  );
}
