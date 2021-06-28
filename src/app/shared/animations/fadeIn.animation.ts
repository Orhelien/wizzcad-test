import {
    animation, trigger, transition, animate, style, state, keyframes
} from '@angular/animations';

export const fadeInAnimation = animation([
    trigger('fadeInAnimation', [
        state('inactive', style({
            transform: 'scale(0)',
        })),
        state('show', style({
            transform: 'scale(1)',
            'height': 'auto',
            'display': 'block'
        })),
        state('hide', style({
            transform: 'scale(0)',
            'height': '0px',
            'opacity': '0',
            'display': 'none'
        })),

        transition('hide => show',
            animate('200ms ease-in', keyframes([
                style({ 'display': 'block', opacity: 0, transform: 'translateY(-10px)', offset: 0 }),
                style({ opacity: 0, transform: 'translateY(-20px)', offset: 0.5 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))),

        transition('inactive => show',
            animate('200ms ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-20px)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateY(-10px)', offset: 0.5 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
            ]))),

        transition('show => hide',
            animate('200ms ease-in', keyframes([
                style({ display: 1, transform: 'translateY(0)', offset: 0 }),
                style({ display: 1, transform: 'translateY(-10px)', offset: 0.5 }),
                style({ display: 0, transform: 'translateY(-20px)', offset: 1.0 })
            ]))),
    ])
]);

export const swing = [
    style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
    style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
    style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
    style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
    style({ transform: 'none', offset: 1 })
]