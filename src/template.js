function generateTemplate(team) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
        <title>Team Profile</title>
      </head>
    
      <body>
        <header class="p-3 my-3 bg-danger text-white text-center">
          <h1>The Team</h1>
        </header>
    
        <div class="container">
          <div
            class="row row-cols-1 row-cols-md-3 d-flex justify-content-center g-1"
          >
            <div class="col-6">
              <div class="card text-bg-light mb-3 shadow" style="max-width: 18rem">
                <!-- Input name -->
                <div class="card-header bg-primary text-white">
                  <h1>
                  ${team[0].name}
                    <br />
                    Manager
                  </h1>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[0].id}</li>
                    <li class="list-group-item">Email: <a href=mailto: ${team[0].email}</a></li>
                    <li class="list-group-item">Office number: ${team[0].officeNumber}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div
                class="card text-bg-light mb-3 shadow col"
                style="max-width: 18rem"
              >
                <div class="card-header bg-primary text-white">
                  <h1>
                  ${team[1].name}
                    <br />
                    Engineer
                  </h1>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[1].id}</li>
                    <li class="list-group-item">Email: ${team[1].email}>${team[1].email}</a></li>
                    <li class="list-group-item">GitHub: <a href=https://github.com/${team[1].github}>${team[1].github}</a></li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div class="col-6">
              <div
                class="card text-bg-light mb-3 shadow col"
                style="max-width: 18rem"
              >
                <div class="card-header bg-primary text-white">
                  <h1>
                  ${team[2].name} 
                    <br />
                    Intern
                  </h1>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[2].id}</li>
                    <li class="list-group-item">Email: <a href=mailto:${team[2].email}>${team[2].email}</a></li>
                    <li class="list-group-item">School: ${team[2].school}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
}

module.exports = generateTemplate;
