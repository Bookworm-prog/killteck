document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const fileUpload = document.getElementById('fileUpload');
    const postList = document.getElementById('postList');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const content = postContent.value.trim();
        const file = fileUpload.files[0];

        if (content || file) {
            const post = document.createElement('div');
            post.className = 'post';

            if (content) {
                const text = document.createElement('p');
                text.textContent = content;
                post.appendChild(text);
            }

            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    let media;
                    if (file.type.startsWith('image/')) {
                        media = document.createElement('img');
                        media.src = event.target.result;
                    } else if (file.type.startsWith('video/')) {
                        media = document.createElement('video');
                        media.src = event.target.result;
                        media.controls = true;
                    }
                    if (media) {
                        post.appendChild(media);
                    }
                };
                reader.readAsDataURL(file);
            }

            postList.appendChild(post);

            postContent.value = '';
            fileUpload.value = '';
        }
    });
});
