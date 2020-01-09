import React from 'react';
// import blog from '../../../images/';
// import resume from '../../../../src/Resume_Anne Lee.pdf';


const About = () => (

  <div>
    <section className='about'>

      <div className='about-image' titleText='image1' imageSrc='https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      <div className='about-content'>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam exercitationem harum alias ratione cupiditate labore repellat ea fuga ad! Fugiat, repellat culpa facere rerum ipsam doloremque laboriosam soluta vero.<br /><br /><br />
        </div>
        <div className='fade-up'>
          <span className='about-title'>Experience Designing from Brief to Shipment</span><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus sit nulla expedita eos repellat voluptatum asperiores quis itaque! Enim ullam illum voluptatum fuga perspiciatis accusantium corporis ad voluptatibus. Aliquid.<br /><br /><br />
        </div>
        <div className='fade-up'>
          <span className='about-title'>Experience Designing for Creative Tools</span><br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum doloribus accusantium debitis in officiis nesciunt quisquam illum, quia soluta deleniti nisi ullam ad expedita aspernatur optio assumenda, voluptatum ut.<br /><br /><br />
        </div>
        <div className='fade-up'>
          <span className='about-title'>Qualified in Programming</span><br /><br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus minima perspiciatis deserunt aspernatur eos in illo repudiandae? Facere labore blanditiis possimus. Magnam ducimus consequuntur rerum! Doloremque architecto unde error doloribus? <a href='https://github.com/hermy0211/portfolio' target='_blank' rel='noopener noreferrer'>coded<img className='link-icon' src={this.state.link} alt='Link Icon' /></a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aut quibusdam dolores, maxime unde odit voluptates temporibus consequatur repellendus dicta, adipisci est sint debitis magnam quod recusandae commodi quo assumenda?<br /><br /><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptas animi autem quaerat ea. Inventore beatae porro quo vitae at fuga harum maxime, mollitia culpa deleniti magni labore laboriosam laborum.
        </div>
      </div>

    </section>
    {/* <div className='about-resume'>
        <a href={resume} download className='about-download-button'>DOWNLOAD CV</a>
      </div> */}
  </div>
);



export default About;
