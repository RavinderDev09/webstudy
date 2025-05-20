import { Component, OnInit } from '@angular/core';
import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition, 
  keyframes,
  query,
  stagger
} from '@angular/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
   imports: [
    CommonModule,     // ✅ Needed for *ngIf, *ngFor, and pipes
    // RouterOutlet,
    DatePipe          // ✅ Needed for | date pipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // Fade in animation
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),
    
    // Slide in from left
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    
    // Slide in from right
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    
    // Slide in from bottom
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    
    // Fade in from bottom
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    
    // Zoom in
    trigger('zoomIn', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
    
    // Pulse animation for buttons
    trigger('pulse', [
      state('inactive', style({ transform: 'scale(1)' })),
      state('active', style({ transform: 'scale(1.05)' })),
      transition('inactive <=> active', animate('0.5s ease-in-out'))
    ]),
    
    // Counter animation for stats
    trigger('counter', [
      transition('* => *', [
        animate('1s', keyframes([
          style({ opacity: 0.5, transform: 'translateY(-10px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ]),
    
    // Stagger animation for features
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('100ms', [
          animate('0.5s ease-in', style({ opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'StudyMode';
  currentTime = new Date();
  pulseState = 'inactive';
  belowGoal = true;
  
  stats = [
    { value: '10K+', label: 'Active Students' },
    { value: '4.9', label: 'App Rating' },
    { value: '100%', label: 'Free' }
  ];
  
  subjects = [
    { name: 'Mathematics', hours: 2.5 },
    { name: 'Physics', hours: 1 }
  ];
  
  totalHours = 3.5;
  
  studyPlan = [
    'Complete Math assignment',
    'Physics chapter 5 (45min)'
  ];
  
  features = [
    { 
      icon: '📅', 
      title: 'Smart Study Plan', 
      description: 'Create personalized study schedules with smart recommendations based on your audience and access.' 
    },
    { 
      icon: '⏱️', 
      title: 'Study Hours Tracking', 
      description: 'Track your daily study hours with analytics to maintain consistent study habits.' 
    },
    { 
      icon: '🤖', 
      title: 'AI Doubt Solver', 
      description: 'Get instant explanations for concepts with our AI-powered doubt solver.' 
    },
    { 
      icon: '📚', 
      title: 'Semester Studying', 
      description: 'Organize your materials by semester and subjects for better results.' 
    }
  ];
  
  tools = [
    { 
      title: 'Highlight Tool', 
      description: 'Mark important content and save for later review.' 
    },
    { 
      title: 'Screenshot Capture', 
      description: 'Screenshots copied to clipboard automatically saved to screenshots folder.' 
    },
    { 
      title: 'Mark-up & Share', 
      description: 'Annotate your study materials and share with classmates.' 
    }
  ];

  ngOnInit() {
    // Update time every minute
    setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
  }

  startPulse() {
    this.pulseState = 'active';
  }

  stopPulse() {
    this.pulseState = 'inactive';
  }
}