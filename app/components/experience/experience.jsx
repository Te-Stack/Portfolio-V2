"use client"
import "./experience.css"
import { motion, useScroll } from "framer-motion";

const Experience = () => {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"],
      });
    
    
    return ( 
        <div className="App">
            <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>Hello Stranger</h1>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          sapiente ipsa voluptates eius, sit enim officiis eaque consequuntur ad
          minima beatae aspernatur voluptate ea repellat ratione, atque
          perferendis qui possimus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          labore blanditiis? In vel pariatur consequuntur libero consequatur
          obcaecati autem minus deserunt quis a? Obcaecati expedita,
          consequuntur facilis voluptatem dignissimos tempora. Neque, aliquam
          incidunt, unde dolores nihil blanditiis corrupti voluptas, dolorum
          quis asperiores facere laborum! Explicabo porro maiores beatae rerum!
          Debitis ullam libero ratione, iusto molestiae eos quis error
          <br />
          <br />
          reiciendis laborum! Quae ad rem blanditiis eligendi deleniti qui
          nostrum esse, nulla cum rerum quam, beatae tempora totam est id?
          Libero dignissimos eveniet magnam tenetur fugiat, minima velit itaque
          accusamus non praesentium? Dignissimos illo illum quidem repellat
          facilis hic, nemo dolore repudiandae ullam earum fugit, aut rem? Modi,
          ex quas! Magnam iure ut perferendis nulla cum numquam laboriosam ad
          quo assumenda nam? In dolorum, reprehenderit, quibusdam provident
          totam voluptatibus repudiandae modi amet nemo voluptate unde nostrum
          cum iste ipsam porro? Qui nihil ullam asperiores officiis tenetur cum
          fuga nemo eos eum eius. Laudantium labore, dicta, non nemo perferendis
          quisquam enim dolores omnis, nostrum velit aperiam. Sequi doloribus
          consequatur debitis hic molestiae, delectus tempore, quidem labore
          vel, ducimus quisquam optio saepe possimus dolorem? Magni accusamus
          asperiores magnam vel rerum dolores facere quod odio quo et velit
          <br />
          <br />
          mollitia optio expedita laboriosam, placeat itaque animi voluptatum
          iure esse amet nulla. Reiciendis similique earum voluptates adipisci.
          Itaque dolorem sint corporis dolorum temporibus est nostrum, sequi
          perspiciatis natus repellat velit optio eveniet eum. Optio ea debitis
          corporis fugit dolorem a nobis sit iure. Illum corrupti atque dolore!
          Accusantium fuga voluptatem tenetur at ipsum unde adipisci aperiam
          minus dolorem ullam distinctio sapiente aliquid iste, perspiciatis
          pariatur vel quod harum minima animi? Velit suscipit quidem soluta
          labore odit. Praesentium! Molestias quod cum maiores culpa ducimus
          provident dignissimos sint! Possimus, incidunt? Corporis, repellendus
          nulla? Odit minima tenetur nisi a provident necessitatibus rem ratione
          recusandae, expedita neque quasi. Quae, dicta voluptatem? Debitis vel
          facilis veritatis unde ipsam consequuntur at magnam. Doloremque
          voluptates perspiciatis, laboriosam, ut molestias suscipit est harum,
          voluptate id porro quia earum accusantium inventore veniam nulla
          fugiat sunt ad. Error, ipsam voluptatibus fugiat dolore incidunt
          placeat delectus, sed architecto quisquam saepe officiis voluptas
          expedita repudiandae. Quaerat, nostrum, nisi ab molestiae itaque
          <br />
          <br />
          quibusdam voluptatem libero maiores, iusto quia voluptate quae? Est
          deleniti voluptatem libero culpa! Laudantium amet harum in. At,
          suscipit blanditiis itaque labore dolore, omnis eos ipsum tempore
          quaerat dolor fugiat eius consequatur voluptatum incidunt voluptatibus
          error possimus reprehenderit. Est porro, necessitatibus ratione atque
          dicta quas odio veritatis, inventore dolorum sunt optio debitis neque
          laborum officia alias, repudiandae veniam hic architecto deserunt
          maxime ipsa. Aspernatur placeat tenetur nulla sapiente. Excepturi
          deleniti, dolor omnis, id consequatur cupiditate consectetur quos
          asperiores doloribus earum ipsam molestias eum debitis labore sed
          repellendus inventore fuga architecto explicabo beatae autem. Dolore
          temporibus exercitationem soluta voluptates? Explicabo id iste
          eveniet, fugit ratione iure magni nesciunt eos vitae autem consequatur
          unde veniam dolor molestiae animi sit, magnam voluptatem numquam? Quod
          amet officia nobis eveniet rem distinctio ea. Laborum natus culpa
          fugit ab tenetur! Illum, eos possimus corporis tempora laboriosam
          molestias! Rerum quos quo temporibus? Mollitia quibusdam nisi nemo
          sequi ad fugiat, dolor deleniti quidem! Officiis, recusandae dolorem.
          <br />
          <br />
          Doloremque rem corrupti totam ipsam vel voluptas suscipit laudantium
          voluptate expedita eveniet. Similique adipisci quisquam, tempora
          asperiores quod fugiat, vel porro enim perferendis, voluptatibus
          assumenda dicta exercitationem molestias ex cupiditate? Explicabo quia
          voluptate quae mollitia non magni quasi reiciendis iusto porro animi
          nostrum quis sed ipsum nemo eveniet, assumenda qui? Dolorum, numquam.
          <br />
          <br />
          Velit asperiores maxime veniam quam adipisci consequatur a. Asperiores
          culpa voluptates consequatur id laboriosam explicabo expedita, earum
          rem! Quidem sint ad repudiandae. Sequi dignissimos tempore dolore unde
          odio eius eum, cumque officiis assumenda alias laudantium,
          voluptatibus soluta quos. Doloremque rem corrupti totam ipsam vel
          voluptas suscipit laudantium voluptate expedita eveniet. Similique
          adipisci quisquam, tempora asperiores quod fugiat, vel porro enim
          perferendis, voluptatibus assumenda dicta exercitationem molestias ex
          cupiditate? Explicabo quia voluptate quae mollitia non magni quasi
          reiciendis iusto porro animi nostrum quis sed ipsum nemo eveniet,
          assumenda qui? Dolorum, numquam.
        </p>
      </article>
        </div>
     );
}
 
export default Experience;