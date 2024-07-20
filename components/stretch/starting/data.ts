import { RepetitionType, StretchExercise } from "@/models/stretch";


const defaultRepetitions = [
    { type: RepetitionType.Bump, count: 10, text: 'Small gentle bumping movements into the stretch' },
    { type: RepetitionType.Hold, count: 10, text: 'Hold the stretch' },
    { type: RepetitionType.Bump, count: 10, text: 'Small gentle bumping movements into the stretch' },
    { type: RepetitionType.Hold, count: 20, text: 'Hold the stretch' },
    { type: RepetitionType.Bump, count: 10, text: 'Small gentle bumping movements into the stretch' },
    { type: RepetitionType.Hold, count: 30, text: 'Hold the stretch' },
];

const stretchExercises: StretchExercise[] = [
    { 
        id: 'shoulder-backbend',
        name: 'Shoulder Backbend',
        steps: [
            'Stand with your feet hip-width apart and your arms at your sides.',
            'Roll your shoulders back and down, squeezing your shoulder blades together.',
            'Interlace your fingers behind your back, with your palms facing inward.',
            'Slowly lift your arms up and away from your body, keeping your shoulders relaxed and your chest open.',
        ],
        repetitions: defaultRepetitions,
     },
     {
        id: 'spine-backbend',
        name: 'Spine Backbend',
        steps: [
            'Stand with your feet hip-width apart and your arms at your sides.',
            'Place your fingertips on you shoulder blades, with your elbows pointing forward.',
            'Lean back slightly while keeping your head neutral.',
        ],
        repetitions: defaultRepetitions,
     },
     {
        id: 'rear-hand-clasp',
        name: 'Rear Hand Clasp',
        steps: [
            'Grab a towel, short, or belt with one of your hands.',
            'Bring your hand behind your back/head.',
            'With the other hand, grab the other end as high as you can.',
            'Gently pull with the hand behind your back/head.',
            'Switch hands and repeat.',
        ],
        repetitions: defaultRepetitions,
     },
     {
        id: 'lying-cross',
        name: 'Lying Cross',
        steps: [
            'Start by lying on your stomach.',
            'Cross one arm under your body and reach as far as you can with the palm facing up.',
            'Place the other arm on the ground, palm down, and straighten it.',
            'Rest your forehead on the ground.',
        ],
        repetitions: [
            { type: RepetitionType.Hold, count: 30, text: 'Hold the stretch' },
        ],
     },
     {
        id: 'wrist-biceps-stretch',
        name: 'Wrist-Biceps Stretch',
        steps: [
            'Stand sideways to a wall.',
            'Place your arm straight on the wall with your palm facing the wall.',
            'While keeping your arm straight, rotate your upper body away from the wall.',
        ],
        repetitions: defaultRepetitions,
     }
];

export default stretchExercises;