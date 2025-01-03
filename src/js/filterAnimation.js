import gsap from 'gsap';

export class FilterAnimation {
  constructor() {
    this.ttl = document.querySelector('h1');
    this.filterBlur = document.querySelector('#filter-ttl feGaussianBlur');
    // this.filterDisplacement = document.querySelector('#filter-ttl feDisplacementMap');
    this.primitiveValues = { stdDeviation: 0, scale: 0 };
  }

  init() {
    const tl = gsap.timeline({
      defaults: {
        duration: 1.0,
        delay: 0.4,
        ease: 'power4.out',
        onUpdate: () => {
          this.filterBlur.setAttribute('stdDeviation', this.primitiveValues.stdDeviation);
          // this.filterDisplacement.setAttribute('scale', this.primitiveValues.scale);
        }
      }
    })
    .to(this.primitiveValues, { 
      startAt: { stdDeviation: 20, scale: 50 }, 
      stdDeviation: '0',
      scale: 0
     }, 0)
    .to(this.ttl, { 
      opacity: 1.0,
      duration: 0.3,
     }, 0)
  }

  show() {
    this.init();
  }

  hide() {
    const tl = gsap.timeline({
      defaults: {
        duration: 1.0,
        ease: 'power4.out',
        onUpdate: () => {
          this.filterBlur.setAttribute('stdDeviation', this.primitiveValues.stdDeviation);
        }
      }
    })
    .to(this.primitiveValues, { 
      stdDeviation: 20, 
      scale: 50
    }, 0)
    .to(this.ttl, { 
      opacity: 0,
      duration: 0.6,
     }, 0);
  }
}