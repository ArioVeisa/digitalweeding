(() => {
    const eventDate = new Date('2026-08-09T00:00:00+07:00').getTime();
    const cover = document.getElementById('cover');
    const invitation = document.getElementById('invitation');
    const navigation = document.getElementById('bottom-nav');
    const musicButton = document.getElementById('music-button');
    const audio = document.getElementById('romance-audio');

    const pad = (value) => String(value).padStart(2, '0');

    const updateCountdown = () => {
        const distance = Math.max(0, eventDate - Date.now());
        const units = {
            days: Math.floor(distance / 86400000),
            hours: Math.floor((distance % 86400000) / 3600000),
            minutes: Math.floor((distance % 3600000) / 60000),
            seconds: Math.floor((distance % 60000) / 1000),
        };

        Object.entries(units).forEach(([unit, value]) => {
            document.querySelector(`[data-unit="${unit}"]`).textContent = pad(value);
        });
    };

    const reveal = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    };

    const showGuest = () => {
        const guest = new URLSearchParams(window.location.search).get('to');
        if (guest) {
            document.getElementById('guest-name').textContent = `Kepada Yth. ${guest}`;
        }
    };

    document.getElementById('open-invitation').addEventListener('click', async () => {
        cover.classList.add('is-opening');
        invitation.hidden = false;
        navigation.hidden = false;
        musicButton.hidden = false;
        document.body.scrollTo({ top: 0, behavior: 'instant' });
        reveal();
        setTimeout(() => cover.classList.add('is-open'), 1250);
        try {
            await audio.play();
            musicButton.classList.add('is-playing');
            musicButton.setAttribute('aria-label', 'Jeda musik');
        } catch (_) {
            // Browser may block audio; button remains available for manual playback.
        }
    });

    musicButton.addEventListener('click', async () => {
        if (audio.paused) {
            await audio.play();
            musicButton.classList.add('is-playing');
            musicButton.setAttribute('aria-label', 'Jeda musik');
        } else {
            audio.pause();
            musicButton.classList.remove('is-playing');
            musicButton.setAttribute('aria-label', 'Putar musik');
        }
    });

    document.getElementById('calendar-link').addEventListener('click', (event) => {
        event.preventDefault();
        const params = new URLSearchParams({
            action: 'TEMPLATE',
            text: 'Pernikahan Korsen Doni Setiawan & Mustika Rahma Dhani',
            dates: '20260809/20260810',
            details: 'Undangan pernikahan Korsen Doni Setiawan dan Mustika Rahma Dhani.',
            location: 'Dusun Sidodadi, Desa Canggu, Dempok, RT 01/RW 032, Kecamatan Badas, Kabupaten Kediri',
        });
        window.open(`https://calendar.google.com/calendar/render?${params}`, '_blank', 'noopener');
    });

    document.getElementById('wish-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = new FormData(event.currentTarget).get('name').trim();
        document.getElementById('form-status').textContent = `Terima kasih, ${name}. Doa Anda sudah kami terima.`;
        event.currentTarget.reset();
    });

    const initParallax = () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const heroBg = document.getElementById('hero-parallax');
        const promiseBg = document.getElementById('promise-parallax');
        if (!heroBg || !promiseBg) return;

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    heroBg.style.transform = `translateY(${scrolled * 0.25}px)`;
                    const promiseTop = promiseBg.parentElement.offsetTop;
                    const promiseDist = scrolled - promiseTop;
                    if (scrolled + window.innerHeight > promiseTop && scrolled < promiseTop + promiseBg.parentElement.offsetHeight) {
                        promiseBg.style.transform = `translateY(${promiseDist * 0.15}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    };

    showGuest();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    initParallax();
})();
