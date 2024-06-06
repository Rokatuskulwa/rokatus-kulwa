document.addEventListener('DOMContentLoaded', () => {
    const storyForm = document.querySelector('#story-form form');
    const storiesContainer = document.getElementById('stories-container');
    const ideaForm = document.querySelector('#idea-form form');
    const ideasContainer = document.getElementById('ideas-container');

    if (storyForm) {
        storyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('story-title').value;
            const content = document.getElementById('story-content').value;

            const story = document.createElement('div');
            story.classList.add('story');
            story.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
                <div class="share">
                    <span>Share:</span>
                    <button onclick="shareContent('${title}', '${content}', 'story')">Facebook</button>
                    <button onclick="shareContent('${title}', '${content}', 'story')">Twitter</button>
                </div>
            `;
            storiesContainer.appendChild(story);
            storyForm.reset();
            document.getElementById('story-form').style.display = 'none';
        });
    }

    if (ideaForm) {
        ideaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('idea-title').value;
            const content = document.getElementById('idea-content').value;

            const idea = document.createElement('div');
            idea.classList.add('idea');
            idea.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
                <div class="share">
                    <span>Share:</span>
                    <button onclick="shareContent('${title}', '${content}', 'idea')">Facebook</button>
                    <button onclick="shareContent('${title}', '${content}', 'idea')">Twitter</button>
                </div>
            `;
            ideasContainer.appendChild(idea);
            ideaForm.reset();
            document.getElementById('idea-form').style.display = 'none';
        });
    }
});

function shareContent(title, content, type) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${title}: ${content}`);
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

    if (type === 'story') {
        window.open(fbUrl, '_blank');
    } else if (type === 'idea') {
        window.open(twitterUrl, '_blank');
    }
}
