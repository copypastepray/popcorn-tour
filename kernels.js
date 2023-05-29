// Global Tour Options
export const tour = {
    startEl: '#startTourBtn', // "Start Tour" button or remove to show tour on load
    //startEvent: 'click', // Specify event to start tour click (default), focus, blur, etc.
    hasClose: true, // adds X (closes tour) to each tooltip
    hasStepCount: true, // displays dynamic step count (e.g. 1 of 13) on bottom of each tooltip
    hasExit: true, // exit button on last tooltip (regardless of hasClose)
    highlightColor: '#0094FF', // must be a valid 6-digit CSS hex code or remove,
    debug: false
}

// Kernel = each tooltip's options/content
export const kernels =  [
    {
        el: '#button',
        loc: 'right',
        title: 'Kernel 1 (One)',
        content: 'lorem ipsum sit amet dolar'
    },
    {
        el: '#button2',
        loc: 'bottom',
        title: 'kernel 2',
        content: 'Orville Redenbacher once said "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris ex, vestibulum et est sed, scelerisque tincidunt ipsum. Aliquam lacus felis, lacinia sit amet accumsan in, tristique vitae ante. Curabitur dignissim nibh libero, facilisis vehicula diam lobortis et. Maecenas nulla enim, tempor at sodales a, vehicula ut justo. Etiam a euismod orci. Phasellus a enim et odio mollis imperdiet. Cras tempor orci a elit dictum, ac congue nisi dictum. Pellentesque efficitur maximus magna, sit amet viverra leo aliquam ultrices. Praesent iaculis auctor posuere. Curabitur euismod eros neque, porta blandit orci tristique quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed facilisis, nunc in scelerisque ultricies, est orci suscipit neque, sed blandit sem quam vel leo."'
    },
    {
        el: '#button3',
        loc: 'top',
        title: 'kernel 3',
        content: 'I would tell you but it\'s a pop secret!'
    }
]