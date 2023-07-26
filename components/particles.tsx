import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  var ParticlesConfig = {
    particles: {
      number: {
        value: 10,
        density: {
          enable: false,
          value_area: 0,
        },
      },
      color: {
        value: "#34d399",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 785.6719098241061,
        color: "#1e1f21",
        opacity: 0.4,
        width: 12.506614074751079,
      },
      move: {
        enable: true,
        speed: 5,
        random: true,
        straight: false,
        bounce: false,
        attract: {
          enable: false,
          rotateX: 4810.236182596568,
          rotateY: 5932.624625202434,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: "grab",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div id="particle-background" className="relative -z-50">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={ParticlesConfig}
        height="100vh"
        width="100vw"
      ></Particles>
    </div>
  );
};

export default ParticleBackground;
