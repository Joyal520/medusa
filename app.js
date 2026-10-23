/**
 * THE LEGEND OF MEDUSA - Interactive Storybook for EdTechra
 * Level: CEFR A1-A2 English
 */

(function () {
  'use strict';

  /* ==========================================================================
     STORY DATA & CONTENT
     ========================================================================== */
  const STORY_DATA = [
    {
      chapterNumber: 1,
      numberTag: '01 — BEFORE THE CURSE',
      title: 'Medusa the Maiden',
      image: 'Gemini_Generated_Image_46rlz446rlz446rl.jpg',
      alt: 'Medusa as a beautiful young woman in Athena\'s temple surrounded by flowers',
      sentencesHtml: [
        'Long ago in Ancient Greece, there lived a young woman named Medusa.',
        'She was very <span class="vocab-word-link" data-vocab="beautiful" role="button" tabindex="0">beautiful</span>, with long dark hair and kind eyes.',
        'Medusa worked peacefully in the grand temple of the goddess Athena.',
        'Many people came to the <span class="vocab-word-link" data-vocab="ancient" role="button" tabindex="0">ancient</span> temple and admired her beauty.',
        'Medusa loved her quiet life near the bright blue sea.'
      ],
      plainSentences: [
        'Long ago in Ancient Greece, there lived a young woman named Medusa.',
        'She was very beautiful, with long dark hair and kind eyes.',
        'Medusa worked peacefully in the grand temple of the goddess Athena.',
        'Many people came to the ancient temple and admired her beauty.',
        'Medusa loved her quiet life near the bright blue sea.'
      ],
      observations: [
        { label: "Medusa's Hair", text: "Her hair is long, soft, and dark before the curse." },
        { label: "Temple Pillars", text: "She stands inside a majestic temple in Ancient Greece." },
        { label: "Statue of Athena", text: "A marble statue of Athena watches quietly from behind." }
      ],
      quiz: {
        question: "What was Medusa like before the curse?",
        options: [
          { text: "A gentle, beautiful maiden", correct: true },
          { text: "A dangerous monster", correct: false },
          { text: "A fierce warrior", correct: false }
        ],
        explanation: "Correct! Medusa was a peaceful and beautiful young maiden."
      }
    },
    {
      chapterNumber: 2,
      numberTag: '02 — THE CURSE',
      title: 'The Transformation',
      image: 'Gemini_Generated_Image_wgtyfpwgtyfpwgty.jpg',
      alt: 'Medusa in shock as her hair turns into living snakes with magical glowing lights',
      sentencesHtml: [
        'One day, a terrible event changed Medusa\'s life forever.',
        'Athena became angry and placed a powerful <span class="vocab-word-link" data-vocab="curse" role="button" tabindex="0">curse</span> upon her.',
        'Suddenly, her lovely hair turned into living snakes!',
        'Medusa became a <span class="vocab-word-link" data-vocab="Gorgon" role="button" tabindex="0">Gorgon</span>.',
        'From that day on, anyone who looked into her eyes would turn to <span class="vocab-word-link" data-vocab="stone" role="button" tabindex="0">stone</span>.'
      ],
      plainSentences: [
        'One day, a terrible event changed Medusa\'s life forever.',
        'Athena became angry and placed a powerful curse upon her.',
        'Suddenly, her lovely hair turned into living snakes!',
        'Medusa became a Gorgon.',
        'From that day on, anyone who looked into her eyes would turn to stone.'
      ],
      observations: [
        { label: "Look at Medusa's hair.", text: "“Her hair is made of snakes.”" },
        { label: "Look at her expression.", text: "“She looks surprised and heartbroken by the curse.”" },
        { label: "Look at the magical light.", text: "“Golden energy swirls around her as the curse takes effect.”" }
      ],
      quiz: {
        question: "What happened to Medusa's hair?",
        options: [
          { text: "It turned into shining gold", correct: false },
          { text: "It became living snakes", correct: true },
          { text: "It was cut off completely", correct: false }
        ],
        explanation: "Correct! Athena's curse transformed her hair into living snakes."
      }
    },
    {
      chapterNumber: 3,
      numberTag: '03 — THE HIDDEN MONSTER',
      title: 'Alone by the Sea',
      image: 'Gemini_Generated_Image_3gd8be3gd8be3gd8.jpg',
      alt: 'Medusa standing on a high cliff overlooking the sea at sunset, lonely and quiet',
      sentencesHtml: [
        'Medusa was terrified and fled far away from other people.',
        'She lived alone in a dark cave near cold sea cliffs.',
        'Across Greece, people called her a dangerous <span class="vocab-word-link" data-vocab="monster" role="button" tabindex="0">monster</span>.',
        'Warriors feared her deadly gaze.',
        'Yet Medusa was not truly evil; she was sad and lonely, remembering the happy days of her past.'
      ],
      plainSentences: [
        'Medusa was terrified and fled far away from other people.',
        'She lived alone in a dark cave near cold sea cliffs.',
        'Across Greece, people called her a dangerous monster.',
        'Warriors feared her deadly gaze.',
        'Yet Medusa was not truly evil; she was sad and lonely, remembering the happy days of her past.'
      ],
      observations: [
        { label: "Lonely Cliff", text: "Medusa stands all alone on high rocks far from cities." },
        { label: "Watching the Sea", text: "She watches the setting sun over the ocean with a sad expression." },
        { label: "Warm Cloak", text: "She wears a traveler's cloak to hide herself from the world." }
      ],
      quiz: {
        question: "Why were people afraid of Medusa?",
        options: [
          { text: "Because looking at her could turn them to stone", correct: true },
          { text: "Because she could breathe fire", correct: false },
          { text: "Because she had an army of wild beasts", correct: false }
        ],
        explanation: "Correct! Anyone who looked into her eyes was turned to solid stone."
      }
    },
    {
      chapterNumber: 4,
      numberTag: '04 — PERSEUS',
      title: 'The Polished Shield',
      image: 'Gemini_Generated_Image_w0v7obw0v7obw0v7.jpg',
      alt: 'Perseus looking into his polished bronze shield reflection to approach Medusa',
      sentencesHtml: [
        'A brave young hero named Perseus was given a dangerous mission to find Medusa.',
        'He knew that looking directly at the Gorgon would be deadly.',
        'Athena gave Perseus a polished bronze <span class="vocab-word-link" data-vocab="shield" role="button" tabindex="0">shield</span>.',
        'Perseus used a clever method.',
        'He looked only at Medusa\'s <span class="vocab-word-link" data-vocab="reflection" role="button" tabindex="0">reflection</span> in the shiny shield instead of looking directly at her.'
      ],
      plainSentences: [
        'A brave young hero named Perseus was given a dangerous mission to find Medusa.',
        'He knew that looking directly at the Gorgon would be deadly.',
        'Athena gave Perseus a polished bronze shield.',
        'Perseus used a clever method.',
        'He looked only at Medusa\'s reflection in the shiny shield instead of looking directly at her.'
      ],
      observations: [
        { label: "Bronze Shield", text: "The bronze shield is polished so smooth that it acts like a mirror." },
        { label: "The Reflection", text: "Perseus carefully watches Medusa in the reflection to stay safe." },
        { label: "Quiet Cave", text: "Sparkling crystals illuminate the dark cave as Medusa sleeps." }
      ],
      quiz: {
        question: "How did Perseus look at Medusa safely?",
        options: [
          { text: "Through dark sunglasses", correct: false },
          { text: "Through her reflection in a polished shield", correct: true },
          { text: "With his eyes completely closed", correct: false }
        ],
        explanation: "Correct! Perseus cleverly used the shiny shield's reflection."
      }
    },
    {
      chapterNumber: 5,
      numberTag: '05 — THE END OF THE LEGEND',
      title: 'A Tale With Two Sides',
      image: 'Gemini_Generated_Image_7fnlmn7fnlmn7fnl.jpg',
      alt: 'Perseus in ancient Greece beside the great golden shield bearing Medusa\'s likeness',
      sentencesHtml: [
        'Perseus entered the cave and <span class="vocab-word-link" data-vocab="defeated" role="button" tabindex="0">defeated</span> Medusa.',
        'Her sorrowful life finally came to an end.',
        'Athena placed Medusa\'s face upon her great golden shield as an emblem of protection.',
        'Her story became one of the most famous tales in Ancient Greece.',
        'The <span class="vocab-word-link" data-vocab="legend" role="button" tabindex="0">legend</span> of Medusa reminds us that every story can have more than one side.'
      ],
      plainSentences: [
        'Perseus entered the cave and defeated Medusa.',
        'Her sorrowful life finally came to an end.',
        'Athena placed Medusa\'s face upon her great golden shield as an emblem of protection.',
        'Her story became one of the most famous tales in Ancient Greece.',
        'The legend of Medusa reminds us that every story can have more than one side.'
      ],
      observations: [
        { label: "Golden Aegis Shield", text: "Medusa's face is immortalized in gold on Athena's shield." },
        { label: "Perseus Victorious", text: "Perseus carries the bag having finished his dangerous quest." },
        { label: "Stone Statues", text: "Ancient soldiers who looked at Medusa stand turned to stone." }
      ],
      quiz: {
        question: "Who defeated Medusa?",
        options: [
          { text: "King Polydectes", correct: false },
          { text: "Perseus", correct: true },
          { text: "The ancient soldiers", correct: false }
        ],
        explanation: "Correct! Perseus defeated Medusa and completed his legend."
      }
    }
  ];

  /* ==========================================================================
     VOCABULARY DATABASE
     ========================================================================== */
  const VOCAB_DATA = {
    ancient: {
      word: 'ANCIENT',
      part: 'adjective',
      meaning: 'Belonging to a time very long ago in history.',
      example: '“They visited an ancient temple in Greece.”'
    },
    beautiful: {
      word: 'BEAUTIFUL',
      part: 'adjective',
      meaning: 'Very pretty and pleasant to look at.',
      example: '“Medusa had beautiful dark hair before the curse.”'
    },
    curse: {
      word: 'CURSE',
      part: 'noun',
      meaning: 'A magic spell or power that causes bad things to happen.',
      example: '“Athena placed a powerful curse on Medusa.”'
    },
    gorgon: {
      word: 'GORGON',
      part: 'noun',
      meaning: 'A mythical creature with snakes for hair whose gaze turns people into stone.',
      example: '“Medusa was transformed into a Gorgon.”'
    },
    stone: {
      word: 'STONE',
      part: 'noun',
      meaning: 'Hard rock material.',
      example: '“Anyone who looked into her eyes turned to stone.”'
    },
    monster: {
      word: 'MONSTER',
      part: 'noun',
      meaning: 'A strange, frightening creature in myths and stories.',
      example: '“People feared Medusa and called her a monster.”'
    },
    shield: {
      word: 'SHIELD',
      part: 'noun',
      meaning: 'A piece of armor used by warriors to protect themselves.',
      example: '“The bronze shield was polished until it shone like a mirror.”'
    },
    reflection: {
      word: 'REFLECTION',
      part: 'noun',
      meaning: 'The image you see in a mirror or shiny surface.',
      example: '“Perseus saw Medusa in the reflection.”'
    },
    defeated: {
      word: 'DEFEATED',
      part: 'verb (past)',
      meaning: 'Won a victory over someone in a battle or quest.',
      example: '“Perseus defeated Medusa with his sword.”'
    },
    legend: {
      word: 'LEGEND',
      part: 'noun',
      meaning: 'A famous old story handed down from the past.',
      example: '“The legend of Medusa is known all around the world.”'
    }
  };

  /* ==========================================================================
     APPLICATION STATE
     ========================================================================== */
  const state = {
    currentChapterIndex: 0,
    isMusicPlaying: false,
    isSoundEnabled: true,
    speechSynthesis: window.speechSynthesis || null,
    currentUtterance: null,
    currentSentenceIndex: 0,
    isSpeaking: false,
    isPaused: false,
    answeredQuizzes: {}, // chapterIndex -> optionIndex
    activeModalVocabWord: null
  };

  /* ==========================================================================
     DOM ELEMENTS
     ========================================================================== */
  const el = {
    bgMusic: document.getElementById('bg-music'),
    btnToggleMusic: document.getElementById('btn-toggle-music'),
    musicStateText: document.getElementById('music-state-text'),
    btnToggleSound: document.getElementById('btn-toggle-sound'),
    soundIcon: document.getElementById('sound-icon'),
    soundStateText: document.getElementById('sound-state-text'),

    // Screens
    coverScreen: document.getElementById('cover-screen'),
    storyScreen: document.getElementById('story-screen'),
    endingScreen: document.getElementById('ending-screen'),
    btnStartStory: document.getElementById('btn-start-story'),
    btnPlayAgain: document.getElementById('btn-play-again'),
    btnExitStory: document.getElementById('btn-exit-story'),

    // Progress
    chapterStepLabel: document.getElementById('chapter-step-label'),
    progressFill: document.getElementById('progress-fill'),
    progressTrack: document.getElementById('progress-track'),
    progressDots: document.getElementById('progress-dots'),

    // Chapter Card Visual
    chapterImage: document.getElementById('chapter-image'),
    imageFrame: document.getElementById('image-frame'),
    btnExploreImage: document.getElementById('btn-explore-image'),
    btnZoomImage: document.getElementById('btn-zoom-image'),
    btnFitToggle: document.getElementById('btn-fit-toggle'),
    fitIcon: document.getElementById('fit-icon'),
    fitLabel: document.getElementById('fit-label'),

    // Chapter Narrative
    chapterNumber: document.getElementById('chapter-number'),
    chapterTitle: document.getElementById('chapter-title'),
    storyText: document.getElementById('story-text'),

    // Audio Controls
    btnPlayAudio: document.getElementById('btn-play-audio'),
    btnPauseAudio: document.getElementById('btn-pause-audio'),
    btnReplayAudio: document.getElementById('btn-replay-audio'),
    audioPlayIcon: document.getElementById('audio-play-icon'),
    audioBtnLabel: document.getElementById('audio-btn-label'),
    audioStatus: document.getElementById('audio-status'),

    // Mini Interaction
    interactionQuestion: document.getElementById('interaction-question'),
    interactionOptions: document.getElementById('interaction-options'),
    interactionFeedback: document.getElementById('interaction-feedback'),

    // Navigation
    btnPrevChapter: document.getElementById('btn-prev-chapter'),
    btnNextChapter: document.getElementById('btn-next-chapter'),
    navChapterIndicator: document.getElementById('nav-chapter-indicator'),

    // Explore Image Modal
    modalExploreImage: document.getElementById('modal-explore-image'),
    exploreModalImg: document.getElementById('explore-modal-img'),
    exploreObsList: document.getElementById('explore-obs-list'),
    btnCloseExplore: document.getElementById('btn-close-explore'),
    btnGotItExplore: document.getElementById('btn-got-it-explore'),

    // Vocabulary Modal
    modalVocabulary: document.getElementById('modal-vocabulary'),
    vocabModalWord: document.getElementById('vocab-modal-word'),
    vocabModalPart: document.getElementById('vocab-modal-part'),
    vocabModalMeaning: document.getElementById('vocab-modal-meaning'),
    vocabModalExample: document.getElementById('vocab-modal-example'),
    btnPronounceWord: document.getElementById('btn-pronounce-word'),
    btnCloseVocab: document.getElementById('btn-close-vocab'),
    btnCloseVocabAction: document.getElementById('btn-close-vocab-action'),

    // Lightbox Modal
    modalLightbox: document.getElementById('modal-lightbox'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxCaption: document.getElementById('lightbox-caption'),
    btnCloseLightbox: document.getElementById('btn-close-lightbox')
  };

  /* ==========================================================================
     AUDIO MANAGEMENT (BACKGROUND MUSIC & NARRATION)
     ========================================================================== */
  
  function initAudio() {
    if (el.bgMusic) {
      el.bgMusic.volume = 0.22;
    }
  }

  function startBackgroundMusic() {
    if (!el.bgMusic) return;
    el.bgMusic.play().then(() => {
      state.isMusicPlaying = true;
      updateMusicUI();
    }).catch(err => {
      console.log('Autoplay audio blocked or pending user gesture:', err);
      state.isMusicPlaying = false;
      updateMusicUI();
    });
  }

  function stopBackgroundMusic() {
    if (!el.bgMusic) return;
    el.bgMusic.pause();
    state.isMusicPlaying = false;
    updateMusicUI();
  }

  function toggleMusic() {
    if (state.isMusicPlaying) {
      stopBackgroundMusic();
    } else {
      startBackgroundMusic();
    }
  }

  function updateMusicUI() {
    if (state.isMusicPlaying) {
      el.btnToggleMusic.classList.add('active');
      el.musicStateText.textContent = 'ON';
    } else {
      el.btnToggleMusic.classList.remove('active');
      el.musicStateText.textContent = 'OFF';
    }
  }

  function toggleSound() {
    state.isSoundEnabled = !state.isSoundEnabled;
    if (!state.isSoundEnabled) {
      stopNarration();
      el.btnToggleSound.classList.remove('active');
      el.soundIcon.textContent = '🔇';
      el.soundStateText.textContent = 'MUTED';
    } else {
      el.btnToggleSound.classList.add('active');
      el.soundIcon.textContent = '🔊';
      el.soundStateText.textContent = 'ON';
    }
  }

  /* ==========================================================================
     SPEECH SYNTHESIS NARRATION WITH SENTENCE HIGHLIGHTING
     ========================================================================== */

  function stopNarration() {
    if (state.speechSynthesis) {
      state.speechSynthesis.cancel();
    }
    state.isSpeaking = false;
    state.isPaused = false;
    state.currentUtterance = null;
    clearSentenceHighlights();
    updateAudioControlsUI();
  }

  function pauseNarration() {
    if (!state.isSpeaking) return;
    if (state.speechSynthesis && !state.isPaused) {
      state.speechSynthesis.pause();
      state.isPaused = true;
      updateAudioControlsUI();
    }
  }

  function resumeNarration() {
    if (state.speechSynthesis && state.isPaused) {
      state.speechSynthesis.resume();
      state.isPaused = false;
      updateAudioControlsUI();
    } else {
      playNarrationFromSentence(state.currentSentenceIndex);
    }
  }

  function playNarration() {
    if (!state.isSoundEnabled) {
      toggleSound();
    }

    if (state.isPaused) {
      resumeNarration();
      return;
    }

    if (state.isSpeaking) {
      pauseNarration();
      return;
    }

    playNarrationFromSentence(0);
  }

  function replayNarration() {
    stopNarration();
    if (!state.isSoundEnabled) {
      toggleSound();
    }
    playNarrationFromSentence(0);
  }

  function playNarrationFromSentence(index) {
    if (!state.speechSynthesis) {
      alert('Speech synthesis is not supported in your browser.');
      return;
    }

    const currentChapter = STORY_DATA[state.currentChapterIndex];
    if (!currentChapter || index >= currentChapter.plainSentences.length) {
      stopNarration();
      return;
    }

    state.isSpeaking = true;
    state.isPaused = false;
    state.currentSentenceIndex = index;
    updateAudioControlsUI();
    highlightSentence(index);

    const sentenceText = currentChapter.plainSentences[index];
    const utterance = new SpeechSynthesisUtterance(sentenceText);
    utterance.lang = 'en-US';
    utterance.rate = 0.90; // Gentle, clear speed for A1-A2 learners
    utterance.pitch = 1.0;

    // Pick a natural English voice if available
    const voices = state.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David') || v.name.includes('Jenny')));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onend = () => {
      if (!state.isSpeaking || state.isPaused) return;
      const nextIndex = index + 1;
      if (nextIndex < currentChapter.plainSentences.length) {
        playNarrationFromSentence(nextIndex);
      } else {
        // Finished all sentences in chapter
        state.isSpeaking = false;
        state.isPaused = false;
        state.currentSentenceIndex = 0;
        clearSentenceHighlights();
        updateAudioControlsUI();
        setAudioStatusMessage('Narration completed', false);
      }
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      stopNarration();
    };

    state.currentUtterance = utterance;
    state.speechSynthesis.speak(utterance);
    setAudioStatusMessage(`Listening: sentence ${index + 1} of ${currentChapter.plainSentences.length}`, true);
  }

  function highlightSentence(index) {
    clearSentenceHighlights();
    const sentenceEl = document.querySelector(`.sentence-span[data-sentence-index="${index}"]`);
    if (sentenceEl) {
      sentenceEl.classList.add('active-speech');
      // Only scroll within viewport if the sentence is completely below the visible fold
      const rect = sentenceEl.getBoundingClientRect();
      if (rect.bottom > window.innerHeight - 20) {
        sentenceEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }

  function clearSentenceHighlights() {
    const highlights = document.querySelectorAll('.sentence-span.active-speech');
    highlights.forEach(el => el.classList.remove('active-speech'));
  }

  function setAudioStatusMessage(msg, isPulsing) {
    if (!el.audioStatus) return;
    const msgEl = el.audioStatus.querySelector('.status-msg');
    const dot = el.audioStatus.querySelector('.pulse-dot');
    if (msgEl) msgEl.textContent = msg;
    if (dot) {
      if (isPulsing) dot.classList.add('pulsing');
      else dot.classList.remove('pulsing');
    }
  }

  function updateAudioControlsUI() {
    if (!el.btnPlayAudio || !el.btnPauseAudio) return;

    if (state.isSpeaking && !state.isPaused) {
      el.btnPlayAudio.classList.add('speaking');
      el.audioPlayIcon.textContent = '🔊';
      el.audioBtnLabel.textContent = 'Listening...';
      el.btnPauseAudio.disabled = false;
    } else if (state.isPaused) {
      el.btnPlayAudio.classList.remove('speaking');
      el.audioPlayIcon.textContent = '▶';
      el.audioBtnLabel.textContent = 'Resume';
      el.btnPauseAudio.disabled = true;
      setAudioStatusMessage('Paused', false);
    } else {
      el.btnPlayAudio.classList.remove('speaking');
      el.audioPlayIcon.textContent = '🔊';
      el.audioBtnLabel.textContent = 'Listen';
      el.btnPauseAudio.disabled = true;
      setAudioStatusMessage('Ready to listen', false);
    }
  }

  /* ==========================================================================
     STORY NAVIGATION & VIEW TRANSITIONS
     ========================================================================== */

  function switchScreen(screenEl) {
    [el.coverScreen, el.storyScreen, el.endingScreen].forEach(s => {
      if (s) {
        s.classList.remove('active');
        s.style.display = 'none';
      }
    });

    if (screenEl) {
      screenEl.style.display = 'block';
      setTimeout(() => {
        screenEl.classList.add('active');
      }, 20);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initStory() {
    initAudio();
    loadChapter(0);
  }

  function startStory() {
    switchScreen(el.storyScreen);
    loadChapter(0);
    startBackgroundMusic();
  }

  function loadChapter(index) {
    if (index < 0 || index >= STORY_DATA.length) return;

    // Stop ongoing narration smoothly
    stopNarration();

    state.currentChapterIndex = index;
    const chapter = STORY_DATA[index];

    // Scroll to top of story screen so image and header are always visible
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update Progress Bar
    const progressPercent = ((index + 1) / STORY_DATA.length) * 100;
    el.chapterStepLabel.textContent = `CHAPTER ${index + 1} OF ${STORY_DATA.length}`;
    el.progressFill.style.width = `${progressPercent}%`;
    el.progressTrack.setAttribute('aria-valuenow', index + 1);

    // Update Dots
    const dots = el.progressDots.querySelectorAll('.dot');
    dots.forEach((dot, dotIdx) => {
      dot.classList.remove('active', 'completed');
      if (dotIdx === index) dot.classList.add('active');
      else if (dotIdx < index) dot.classList.add('completed');
    });

    // Update Image with transition & Ken Burns reset
    el.imageFrame.classList.remove('animate-zoom');
    el.chapterImage.src = chapter.image;
    el.chapterImage.alt = chapter.alt;
    
    // Trigger smooth zoom restart
    setTimeout(() => {
      el.imageFrame.classList.add('animate-zoom');
    }, 100);

    // Update Chapter Header
    el.chapterNumber.textContent = chapter.numberTag;
    el.chapterTitle.textContent = chapter.title;

    // Build Story Sentences with Spans
    let storyHtml = '';
    chapter.sentencesHtml.forEach((sentenceContent, sentIdx) => {
      storyHtml += `<span class="sentence-span" data-sentence-index="${sentIdx}">${sentenceContent}</span> `;
    });
    el.storyText.innerHTML = storyHtml;

    // Bind Vocabulary Click Handlers inside text
    const vocabLinks = el.storyText.querySelectorAll('.vocab-word-link');
    vocabLinks.forEach(link => {
      const vocabKey = link.getAttribute('data-vocab').toLowerCase();
      link.addEventListener('click', (e) => {
        e.stopPropagation();
        showVocabulary(vocabKey);
      });
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showVocabulary(vocabKey);
        }
      });
    });

    // Render In-Chapter Mini Quiz
    renderQuiz(chapter.quiz, index);

    // Navigation Buttons State
    el.btnPrevChapter.disabled = index === 0;
    if (index === STORY_DATA.length - 1) {
      el.btnNextChapter.innerHTML = `<span>Finish Story</span> <span aria-hidden="true">➔</span>`;
    } else {
      el.btnNextChapter.innerHTML = `<span>Next</span> <span aria-hidden="true">→</span>`;
    }
    el.navChapterIndicator.textContent = `Chapter ${index + 1} of ${STORY_DATA.length}`;
  }

  function nextChapter() {
    if (state.currentChapterIndex < STORY_DATA.length - 1) {
      loadChapter(state.currentChapterIndex + 1);
    } else {
      endStory();
    }
  }

  function previousChapter() {
    if (state.currentChapterIndex > 0) {
      loadChapter(state.currentChapterIndex - 1);
    }
  }

  function renderQuiz(quizData, chapterIndex) {
    el.interactionQuestion.textContent = quizData.question;
    el.interactionOptions.innerHTML = '';
    el.interactionFeedback.style.display = 'none';
    el.interactionFeedback.className = 'interaction-feedback';

    const letters = ['A', 'B', 'C'];
    const savedAnswer = state.answeredQuizzes[chapterIndex];

    quizData.options.forEach((opt, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-letter">${letters[optIdx]}</span> <span>${opt.text}</span>`;
      btn.setAttribute('aria-label', `Option ${letters[optIdx]}: ${opt.text}`);

      if (savedAnswer !== undefined) {
        if (optIdx === savedAnswer) {
          if (opt.correct) {
            btn.classList.add('selected-correct');
          } else {
            btn.classList.add('selected-incorrect');
          }
        }
        btn.disabled = true;
      }

      btn.addEventListener('click', () => {
        handleInteraction(optIdx, quizData, chapterIndex);
      });

      el.interactionOptions.appendChild(btn);
    });

    if (savedAnswer !== undefined) {
      const isCorrect = quizData.options[savedAnswer].correct;
      el.interactionFeedback.style.display = 'block';
      if (isCorrect) {
        el.interactionFeedback.classList.add('correct');
        el.interactionFeedback.textContent = quizData.explanation;
      } else {
        el.interactionFeedback.classList.add('retry');
        el.interactionFeedback.textContent = 'Not quite! Try reading the story again to find the answer.';
      }
    }
  }

  function handleInteraction(optionIndex, quizData, chapterIndex) {
    state.answeredQuizzes[chapterIndex] = optionIndex;
    const selectedOption = quizData.options[optionIndex];
    const buttons = el.interactionOptions.querySelectorAll('.option-btn');

    buttons.forEach((b, idx) => {
      b.disabled = true;
      if (idx === optionIndex) {
        if (selectedOption.correct) {
          b.classList.add('selected-correct');
        } else {
          b.classList.add('selected-incorrect');
        }
      }
    });

    el.interactionFeedback.style.display = 'block';
    el.interactionFeedback.className = 'interaction-feedback';

    if (selectedOption.correct) {
      el.interactionFeedback.classList.add('correct');
      el.interactionFeedback.textContent = quizData.explanation;
    } else {
      el.interactionFeedback.classList.add('retry');
      el.interactionFeedback.textContent = 'Not quite! Try reading the story again to find the answer.';
    }
  }

  function endStory() {
    stopNarration();
    // Stop background music on final screen as requested
    stopBackgroundMusic();
    switchScreen(el.endingScreen);
  }

  function restartStory() {
    state.answeredQuizzes = {};
    startStory();
  }

  function exitStory() {
    stopNarration();
    stopBackgroundMusic();
    switchScreen(el.coverScreen);
  }

  /* ==========================================================================
     IMAGE EXPLORATION MODAL
     ========================================================================== */

  function openExploreImage() {
    const chapter = STORY_DATA[state.currentChapterIndex];
    if (!chapter) return;

    el.exploreModalImg.src = chapter.image;
    el.exploreModalImg.alt = chapter.alt;
    el.exploreObsList.innerHTML = '';

    chapter.observations.forEach(obs => {
      const li = document.createElement('li');
      li.className = 'obs-item';
      li.innerHTML = `<strong>${obs.label}</strong> ${obs.text}`;
      el.exploreObsList.appendChild(li);
    });

    el.modalExploreImage.style.display = 'flex';
    el.btnGotItExplore.focus();
  }

  function closeExploreImage() {
    el.modalExploreImage.style.display = 'none';
  }

  /* ==========================================================================
     VOCABULARY MODAL & PRONUNCIATION
     ========================================================================== */

  function showVocabulary(wordKey) {
    const data = VOCAB_DATA[wordKey];
    if (!data) return;

    state.activeModalVocabWord = data.word;
    el.vocabModalWord.textContent = data.word;
    el.vocabModalPart.textContent = data.part;
    el.vocabModalMeaning.textContent = data.meaning;
    el.vocabModalExample.textContent = data.example;

    el.modalVocabulary.style.display = 'flex';
    el.btnPronounceWord.focus();
  }

  function closeVocabulary() {
    el.modalVocabulary.style.display = 'none';
    state.activeModalVocabWord = null;
  }

  function pronounceCurrentVocab() {
    if (!state.speechSynthesis || !state.activeModalVocabWord) return;
    state.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(state.activeModalVocabWord.toLowerCase());
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    state.speechSynthesis.speak(utterance);
  }

  /* ==========================================================================
     FULLSCREEN LIGHTBOX
     ========================================================================== */

  function openLightbox() {
    const chapter = STORY_DATA[state.currentChapterIndex];
    if (!chapter) return;

    el.lightboxImg.src = chapter.image;
    el.lightboxImg.alt = chapter.alt;
    el.lightboxCaption.textContent = `${chapter.numberTag} — ${chapter.title}`;
    el.modalLightbox.style.display = 'flex';
    el.btnCloseLightbox.focus();
  }

  function closeLightbox() {
    el.modalLightbox.style.display = 'none';
  }

  function toggleFitMode() {
    if (!el.imageFrame) return;
    const isFill = el.imageFrame.classList.toggle('mode-fill');
    if (isFill) {
      if (el.btnFitToggle) el.btnFitToggle.classList.add('active');
      if (el.fitLabel) el.fitLabel.textContent = 'Fill View';
      if (el.fitIcon) el.fitIcon.textContent = '📐';
    } else {
      if (el.btnFitToggle) el.btnFitToggle.classList.remove('active');
      if (el.fitLabel) el.fitLabel.textContent = 'Fit Full';
      if (el.fitIcon) el.fitIcon.textContent = '🖼️';
    }
  }

  /* ==========================================================================
     GESTURES & KEYBOARD SHORTCUTS
     ========================================================================== */
  
  function initKeyboardAndGestures() {
    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      // If modal open, Escape closes it
      if (e.key === 'Escape') {
        if (el.modalVocabulary.style.display === 'flex') closeVocabulary();
        if (el.modalExploreImage.style.display === 'flex') closeExploreImage();
        if (el.modalLightbox.style.display === 'flex') closeLightbox();
        return;
      }

      // Check if in story screen
      if (el.storyScreen.classList.contains('active')) {
        // Skip if typing in an input
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

        if (e.key === 'ArrowRight') {
          nextChapter();
        } else if (e.key === 'ArrowLeft') {
          previousChapter();
        } else if (e.key === ' ' && document.activeElement.tagName !== 'BUTTON') {
          e.preventDefault();
          playNarration();
        }
      }
    });

    // Touch Swipe Support on Story Card
    let touchStartX = 0;
    let touchEndX = 0;

    const gestureTarget = document.getElementById('story-screen');
    if (gestureTarget) {
      gestureTarget.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      gestureTarget.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });
    }

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 60) {
        if (swipeDistance < 0) {
          // Swiped left -> Next
          nextChapter();
        } else {
          // Swiped right -> Previous
          previousChapter();
        }
      }
    }
  }

  /* ==========================================================================
     EVENT BINDINGS
     ========================================================================== */

  function bindEvents() {
    // Music & Sound Header Controls
    el.btnToggleMusic.addEventListener('click', toggleMusic);
    el.btnToggleSound.addEventListener('click', toggleSound);

    // Screen Transitions
    el.btnStartStory.addEventListener('click', startStory);
    el.btnPlayAgain.addEventListener('click', restartStory);
    el.btnExitStory.addEventListener('click', exitStory);

    // Navigation Controls
    el.btnPrevChapter.addEventListener('click', previousChapter);
    el.btnNextChapter.addEventListener('click', nextChapter);

    // Narration Controls
    el.btnPlayAudio.addEventListener('click', playNarration);
    el.btnPauseAudio.addEventListener('click', pauseNarration);
    el.btnReplayAudio.addEventListener('click', replayNarration);

    // Image Exploration & Lightbox & Fit Controls
    el.btnExploreImage.addEventListener('click', openExploreImage);
    el.btnZoomImage.addEventListener('click', openLightbox);
    el.chapterImage.addEventListener('click', openLightbox);
    if (el.btnFitToggle) {
      el.btnFitToggle.addEventListener('click', toggleFitMode);
    }
    
    // Modal Close Handlers
    el.btnCloseExplore.addEventListener('click', closeExploreImage);
    el.btnGotItExplore.addEventListener('click', closeExploreImage);
    el.modalExploreImage.querySelector('.modal-backdrop').addEventListener('click', closeExploreImage);

    el.btnCloseVocab.addEventListener('click', closeVocabulary);
    el.btnCloseVocabAction.addEventListener('click', closeVocabulary);
    el.btnPronounceWord.addEventListener('click', pronounceCurrentVocab);
    el.modalVocabulary.querySelector('.modal-backdrop').addEventListener('click', closeVocabulary);

    el.btnCloseLightbox.addEventListener('click', closeLightbox);
    el.modalLightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
  }

  /* ==========================================================================
     INIT ON DOM LOAD
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    initKeyboardAndGestures();
    initStory();
  });

})();
