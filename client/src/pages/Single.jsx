import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src={`https://images.pexels.com/photos/19976822/pexels-photo-19976822/free-photo-of-woman-looking-at-flock-of-birds-in-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          alt=""
        />
        <div className="user">
          <img
            src="https://avatars.githubusercontent.com/u/90951033?v=4"
            alt=""
          />
          <div className="info">
            <span>Subha</span>
            <p>Posted on 12.12.2012</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Perspiciatis, laboriosam quis. Ea molestiae sequi a illum
          voluptatibus, perspiciatis harum atque sed iusto, reiciendis quae
          ipsam nam ratione inventore quaerat at molestias aliquam voluptas
          soluta mollitia voluptatum exercitationem nisi quidem reprehenderit.
          Cum quis dolor dolorem doloremque consectetur reiciendis mollitia
          blanditiis nemo beatae eos, est nihil modi quisquam ea quidem quos
          tempora, dolorum et minus ab magni? Nobis quidem facilis at pariatur,
          commodi error odit. Dolorem iure velit provident perspiciatis
          repellendus vitae recusandae facilis corrupti porro, fuga placeat ex
          quas perferendis possimus aut cupiditate? Aperiam vel unde cum soluta
          nam molestias corporis!
        </p>
        {/* <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(post.desc),
                    }}
                  ></p>     */}
      </div>
    <Menu/>
    </div>
  );
}

export default Single;
