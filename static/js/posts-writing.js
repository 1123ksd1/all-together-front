const imageInput = document.getElementById('btn-image');
const videoInput = document.getElementById('btn-video');
const textarea = document.getElementById('textarea');
const maxHeight = 834; // 원하는 최대 높이 (px)
textarea.addEventListener('input', function () {
    if (textarea.scrollHeight > maxHeight) {
        textarea.style.overflow = 'auto';
    } else {
        textarea.style.overflow = 'hidden';
    }
});


imageInput.addEventListener('change', function (event) {
const file = event.target.files[0];
if (file) {
    // 파일 확장자 확인
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.onload = function () {
                if (img.width > 850) {
                    img.style.width = '850px';
                }
                textarea.appendChild(img);
            };
        };
        reader.readAsDataURL(file);
    } else {
        alert('이미지 파일만 등록할 수 있습니다.');
        // 파일 선택 초기화
        imageInput.value = '';
    }
}
});

videoInput.addEventListener('change', function (event) {
const file = event.target.files[0];
if (file) {
    // 파일 확장자 확인
    const allowedExtensions = ['mp4', 'avi', 'mov', 'wmv'];
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            video.style.width = "700px";
            video.style.height = "500px";
            video.style.marginLeft = "80px";
            video.style.position = 'relative'; // 포지션 추가
            video.style.zIndex = 1; // z-index 설정
            video.style.cursor = 'move'; // 이동할 수 있는 커서 설정

            let offsetX, offsetY, startX, startY, isDragging = false;

            video.addEventListener('mousedown', function (e) {
                e.preventDefault();
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                offsetX = parseFloat(video.style.marginLeft) || 0;
                offsetY = parseFloat(video.style.marginTop) || 0;
            });

            document.addEventListener('mousemove', function (e) {
                if (!isDragging) return;

                const newX = offsetX + (e.clientX - startX);
                const newY = offsetY + (e.clientY - startY);

                video.style.marginLeft = newX + 'px';
                video.style.marginTop = newY + 'px';
            });

            document.addEventListener('mouseup', function () {
                isDragging = false;
            });

            textarea.appendChild(video);
        };
        reader.readAsDataURL(file);
    } else {
        alert('비디오 파일만 등록할 수 있습니다.');
        // 파일 선택 초기화
        videoInput.value = '';
    }
}
});
