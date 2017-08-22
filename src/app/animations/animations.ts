import { trigger, style, animate,  transition, state, AnimationTriggerMetadata} from '@angular/animations';

export const slideIn: AnimationTriggerMetadata = trigger('slideIn', [
  state('*', style({
    transform: 'translateX(100%)',
  })),
  state('in', style({
    transform: 'translateX(0)',
  })),
  state('out',   style({
    transform: 'translateX(-100%)',
  })),
  transition('* => in', animate('600ms ease-in')),
  transition('in => out', animate('600ms ease-in'))
]);

export const fadeInOut: AnimationTriggerMetadata =  trigger('fadeInOut', [
  state('*', style({ 'opacity': 1 })),
  state('void', style({ 'opacity': 0})),
  transition('* => void', animate(800)),
  transition('void => *', animate(800))
]);

export const fadeSlideIn: AnimationTriggerMetadata =  trigger('fadeSlideIn', [
  state('*', style({ 'opacity': 1, transform: 'translateY(0)'})),
  state('void', style({ 'opacity': 0, transform: 'translateY(10px)' })),
  transition('void => *', animate(400))
]);

export const fadeIn: AnimationTriggerMetadata =  trigger('fadeIn', [
  state('*', style({ 'opacity': 1})),
  state('void', style({ 'opacity': 0 })),
  transition('void => *', animate(500))
]);


