import React from "react";
import img from "../assets/logo.png";

export default function Day2() {
  return (
    <>
      <header>
        <div className="logo">
            <img src={img} alt="Logo" />
        </div>
        <nav>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Contect</a></li>
            </ul>
        </nav>
      </header>
      <main>
        <div className="sidebar">
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Student</a></li>
                <li><a href="#">Teacher</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
        <div className="content">Content Area Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora autem temporibus vitae illum! Reiciendis nulla, vitae perferendis consectetur magnam accusantium nemo maiores vel nihil cumque ipsa dolorem autem. Voluptatibus.
        Ipsa libero corrupti magnam est assumenda dolores molestiae perspiciatis error, repellat quae id fuga pariatur nisi, debitis cum at omnis ullam vel veniam, incidunt dolorem ipsam blanditiis. Consectetur, voluptatum iusto.
        Error asperiores commodi ullam deserunt veniam magnam ducimus quod in. Ipsa, voluptatem reiciendis repellendus asperiores, pariatur cumque neque voluptatibus doloribus enim ratione veritatis sapiente nesciunt? Placeat deserunt quis accusantium temporibus.
        Ipsum, beatae! Voluptatem nemo, doloremque sed itaque consequatur accusamus, amet veritatis fugit incidunt asperiores natus obcaecati. Beatae ipsa velit, iusto minima alias amet sapiente reiciendis officiis debitis doloribus illum cum?
        Illo amet laboriosam exercitationem consectetur quibusdam illum, vel dolorum blanditiis dolore nulla doloribus temporibus quaerat? Quae ipsum rerum repellendus dolore sunt maxime quos. Aspernatur quibusdam mollitia est ad culpa similique.
        Nesciunt quibusdam minus ipsum modi officiis quisquam et hic consequatur sunt vel libero, facere aut distinctio molestias itaque corporis blanditiis culpa sed ad illum aliquid. Maiores eaque sint dolor voluptates!
        Saepe, eligendi itaque modi accusamus quis veritatis obcaecati voluptates officiis ex consequatur excepturi nam illo cum, culpa ab porro blanditiis rerum iure quae eveniet quos voluptas! Eaque unde illo illum!
        Vitae harum veritatis modi, ipsa fugiat ut repellendus, aliquam quia rerum odio quisquam unde, soluta assumenda? Explicabo, saepe necessitatibus animi sequi in, doloremque maxime alias aliquam sint nam eius eligendi!
        Provident deserunt aliquam commodi atque magni tempore at, ex perspiciatis corrupti error quaerat ipsam nostrum cumque. A, molestiae, iste ipsa dolorem, consequatur delectus eligendi nihil necessitatibus numquam asperiores aperiam unde.
        Voluptates harum neque quisquam reiciendis fugit! Beatae pariatur quaerat aperiam sunt! Dignissimos eius ipsam architecto est quibusdam fugiat fuga unde, dolore autem debitis ipsa suscipit ab impedit doloremque dolor! Libero?</div>
      </main>

      <footer>this is footer</footer>
    </>
  );
}
