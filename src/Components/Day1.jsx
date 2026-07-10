import React from "react";

function Day1() {
  return (
    <div>
      {/* <h1>Section One</h1> */}
      {/* <div>
      <h1>hellow</h1>
      <h2>hellow</h2>
      <h3>hellow</h3>
      <h4>hellow</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eius,
        suscipit culpa aliquid est rem non fuga veniam nam minima. Repellendus
        enim magni inventore magnam ut, at id aspernatur saepe.
      </p>
      <a href="#">hellow</a>
      <img src="" alt="" />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <ol>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ol>
      <table>
        <tr>
          <th>Student</th>
          <th>Class</th>
          <th>Fess</th>
        </tr>
        <tr>
          <td>Student</td>
          <td>Class</td>
          <td>Fess</td>
        </tr>
      </table>
        <form action="">
            <h2>Practice Form</h2>
            <label htmlFor="">Name:</label>
            <input type="text" name="" id=""  placeholder="enter Your Name:"/> <br />
            <label htmlFor="">Email:</label>
            <input type="email" name="" id=""  placeholder="enter Your Email:"/> <br />
            <label htmlFor="">Password:</label>
            <input type="password" name="" id=""  placeholder="enter Your Password:"/> <br />
            <button>Login</button>
        </form>
        <div>this is a div tag</div>
        <span>Thsi is a Span tag</span>

    </div> */}
      {/* <h1>Section Two</h1> */}

      <header>
        <div>Portfolio</div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Hi, I'm Saleem Raza</h1>
          <h2>
            <strong>Frontend Developer</strong>
          </h2>
          <p>
            <em>Learning </em>
            <mark>React</mark> & JavaScript
          </p>
          <button>Contact Me</button>
        </section>
        <section>
          <h1>About Me</h1>
          <p>
            I'm Saleem Raza Frontend Developer now learning react js for my best
            of knowledge <abbr title="BS Information Technology">BSIT</abbr>
          </p>
          <ul>
            <li>Graduate</li>
            <li>Learning Frontend</li>
            <li>Looking for Internship</li>
          </ul>
        </section>
        <section>
          <h1>Skills</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
          </ul>
        </section>

        <section>
          <h1>Projects</h1>

          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Technology</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calculator</td>
                <td>HTML CSS JS</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Todo App</td>
                <td>React</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Weather App</td>
                <td>React</td>
                <td>Learning</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h1>Contact Form</h1>
          <form action="">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              required
            />{" "}
            <br />
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              required
            />{" "}
            <br />
            <label htmlFor="subject">Subject: </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter Subject"
              required
            />{" "}
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="" id="message"></textarea>
            <br />
            <button onSubmit="Submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <ul>
          <li>Name: Saleem Raza</li>
          <li>
            {" "}
            <address>Email: saleemr78612@gmail.com</address>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>Copyright</li>
        </ul>
      </footer>
    </div>
  );
}

export default Day1;
