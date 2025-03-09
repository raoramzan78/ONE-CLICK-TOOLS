// Tools Data
const toolsData = [
    // Image Tools
    {
        id: "image-to-png",
        name: "Image to PNG Converter",
        description: "Convert images from various formats to PNG format.",
        category: "image-tools",
        icon: "fas fa-file-image",
        url: "tools/image-to-png.html"
    },
    {
        id: "image-to-jpg",
        name: "Image to JPG Converter",
        description: "Convert images from various formats to JPG format.",
        category: "image-tools",
        icon: "fas fa-file-image",
        url: "tools/image-to-jpg.html"
    },
    {
        id: "image-resizer",
        name: "Image Resizer",
        description: "Resize your images to any dimension without losing quality.",
        category: "image-tools",
        icon: "fas fa-expand",
        url: "tools/image-resizer.html"
    },
    {
        id: "image-compressor",
        name: "Image Compressor",
        description: "Compress your images to reduce file size while maintaining quality.",
        category: "image-tools",
        icon: "fas fa-compress",
        url: "tools/image-compressor.html"
    },
    {
        id: "image-cropper",
        name: "Image Cropper",
        description: "Crop your images to the desired dimensions.",
        category: "image-tools",
        icon: "fas fa-crop",
        url: "tools/image-cropper.html"
    },
    {
        id: "image-to-base64",
        name: "Convert Image to Base64",
        description: "Convert your images to Base64 encoded strings.",
        category: "image-tools",
        icon: "fas fa-code",
        url: "tools/image-to-base64.html"
    },
    {
        id: "webp-to-png",
        name: "Convert WebP to PNG",
        description: "Convert WebP images to PNG format.",
        category: "image-tools",
        icon: "fas fa-exchange-alt",
        url: "tools/webp-to-png.html"
    },
    {
        id: "gif-maker",
        name: "GIF Maker",
        description: "Create animated GIFs from images or videos.",
        category: "image-tools",
        icon: "fas fa-film",
        url: "tools/gif-maker.html"
    },
    {
        id: "qr-code-generator",
        name: "QR Code Generator",
        description: "Generate QR codes for URLs, text, or contact information.",
        category: "image-tools",
        icon: "fas fa-qrcode",
        url: "tools/qr-code-generator.html"
    },
    {
        id: "screenshot-to-pdf",
        name: "Screenshot to PDF Converter",
        description: "Convert screenshots or images to PDF documents.",
        category: "image-tools",
        icon: "fas fa-file-pdf",
        url: "tools/screenshot-to-pdf.html"
    },

    // SEO Tools
    {
        id: "meta-tag-generator",
        name: "Meta Tag Generator",
        description: "Generate meta tags for your website to improve SEO.",
        category: "seo-tools",
        icon: "fas fa-tags",
        url: "tools/meta-tag-generator.html"
    },
    {
        id: "keyword-density-checker",
        name: "Keyword Density Checker",
        description: "Check the density of keywords in your content.",
        category: "seo-tools",
        icon: "fas fa-percentage",
        url: "tools/keyword-density-checker.html"
    },
    {
        id: "sitemap-generator",
        name: "Sitemap Generator",
        description: "Generate XML sitemaps for your website.",
        category: "seo-tools",
        icon: "fas fa-sitemap",
        url: "tools/sitemap-generator.html"
    },
    {
        id: "robots-txt-generator",
        name: "Robots.txt Generator",
        description: "Generate robots.txt files for your website.",
        category: "seo-tools",
        icon: "fas fa-robot",
        url: "tools/robots-txt-generator.html"
    },
    {
        id: "google-index-checker",
        name: "Google Index Checker",
        description: "Check if your website is indexed by Google.",
        category: "seo-tools",
        icon: "fab fa-google",
        url: "tools/google-index-checker.html"
    },
    {
        id: "domain-authority-checker",
        name: "Domain Authority Checker",
        description: "Check the domain authority of your website.",
        category: "seo-tools",
        icon: "fas fa-chart-line",
        url: "tools/domain-authority-checker.html"
    },
    {
        id: "backlink-checker",
        name: "Backlink Checker",
        description: "Check the backlinks pointing to your website.",
        category: "seo-tools",
        icon: "fas fa-link",
        url: "tools/backlink-checker.html"
    },
    {
        id: "page-speed-checker",
        name: "Page Speed Checker",
        description: "Check the loading speed of your website.",
        category: "seo-tools",
        icon: "fas fa-tachometer-alt",
        url: "tools/page-speed-checker.html"
    },
    {
        id: "xml-sitemap-validator",
        name: "XML Sitemap Validator",
        description: "Validate your XML sitemap for errors.",
        category: "seo-tools",
        icon: "fas fa-check-circle",
        url: "tools/xml-sitemap-validator.html"
    },
    {
        id: "mobile-friendly-test",
        name: "Mobile-Friendly Test",
        description: "Check if your website is mobile-friendly.",
        category: "seo-tools",
        icon: "fas fa-mobile-alt",
        url: "tools/mobile-friendly-test.html"
    },

    // Text Tools
    {
        id: "word-counter",
        name: "Word Counter",
        description: "Count the number of words, characters, and sentences in your text.",
        category: "text-tools",
        icon: "fas fa-calculator",
        url: "tools/word-counter.html"
    },
    {
        id: "character-counter",
        name: "Character Counter",
        description: "Count the number of characters in your text.",
        category: "text-tools",
        icon: "fas fa-text-width",
        url: "tools/character-counter.html"
    },
    {
        id: "case-converter",
        name: "Case Converter",
        description: "Convert text to uppercase, lowercase, title case, or sentence case.",
        category: "text-tools",
        icon: "fas fa-font",
        url: "tools/case-converter.html"
    },
    {
        id: "plagiarism-checker",
        name: "Plagiarism Checker",
        description: "Check your text for plagiarism.",
        category: "text-tools",
        icon: "fas fa-copy",
        url: "tools/plagiarism-checker.html"
    },
    {
        id: "grammar-checker",
        name: "Grammar Checker",
        description: "Check your text for grammar and spelling errors.",
        category: "text-tools",
        icon: "fas fa-spell-check",
        url: "tools/grammar-checker.html"
    },
    {
        id: "text-to-speech",
        name: "Text-to-Speech",
        description: "Convert your text to speech.",
        category: "text-tools",
        icon: "fas fa-volume-up",
        url: "tools/text-to-speech.html"
    },
    {
        id: "speech-to-text",
        name: "Speech-to-Text",
        description: "Convert your speech to text.",
        category: "text-tools",
        icon: "fas fa-microphone",
        url: "tools/speech-to-text.html"
    },
    {
        id: "url-encoder-decoder",
        name: "URL Encoder & Decoder",
        description: "Encode or decode URLs.",
        category: "text-tools",
        icon: "fas fa-link",
        url: "tools/url-encoder-decoder.html"
    },
    {
        id: "fancy-text-generator",
        name: "Fancy Text Generator",
        description: "Generate fancy text for social media.",
        category: "text-tools",
        icon: "fas fa-magic",
        url: "tools/fancy-text-generator.html"
    },
    {
        id: "random-text-generator",
        name: "Random Text Generator",
        description: "Generate random text for testing purposes.",
        category: "text-tools",
        icon: "fas fa-random",
        url: "tools/random-text-generator.html"
    },

    // Developer Tools
    {
        id: "json-formatter",
        name: "JSON Formatter",
        description: "Format and validate JSON data.",
        category: "developer-tools",
        icon: "fas fa-code",
        url: "tools/json-formatter.html"
    },
    {
        id: "html-to-markdown",
        name: "HTML to Markdown Converter",
        description: "Convert HTML code to Markdown format.",
        category: "developer-tools",
        icon: "fas fa-code",
        url: "tools/html-to-markdown.html"
    },
    {
        id: "css-minifier",
        name: "CSS Minifier",
        description: "Minify CSS code to reduce file size.",
        category: "developer-tools",
        icon: "fab fa-css3",
        url: "tools/css-minifier.html"
    },
    {
        id: "javascript-minifier",
        name: "JavaScript Minifier",
        description: "Minify JavaScript code to reduce file size.",
        category: "developer-tools",
        icon: "fab fa-js",
        url: "tools/javascript-minifier.html"
    },
    {
        id: "sql-formatter",
        name: "SQL Formatter",
        description: "Format SQL queries for better readability.",
        category: "developer-tools",
        icon: "fas fa-database",
        url: "tools/sql-formatter.html"
    },
    {
        id: "htaccess-redirect-generator",
        name: "HTACCESS Redirect Generator",
        description: "Generate HTACCESS redirect rules.",
        category: "developer-tools",
        icon: "fas fa-exchange-alt",
        url: "tools/htaccess-redirect-generator.html"
    },
    {
        id: "markdown-to-html",
        name: "Markdown to HTML Converter",
        description: "Convert Markdown to HTML code.",
        category: "developer-tools",
        icon: "fas fa-code",
        url: "tools/markdown-to-html.html"
    },
    {
        id: "color-code-picker",
        name: "Color Code Picker",
        description: "Pick colors and get their HEX, RGB, and HSL values.",
        category: "developer-tools",
        icon: "fas fa-palette",
        url: "tools/color-code-picker.html"
    },
    {
        id: "base64-encoder-decoder",
        name: "Base64 Encoder & Decoder",
        description: "Encode or decode Base64 data.",
        category: "developer-tools",
        icon: "fas fa-exchange-alt",
        url: "tools/base64-encoder-decoder.html"
    },
    {
        id: "ip-address-lookup",
        name: "IP Address Lookup",
        description: "Look up information about an IP address.",
        category: "developer-tools",
        icon: "fas fa-network-wired",
        url: "tools/ip-address-lookup.html"
    },

    // Math & Calculators
    {
        id: "percentage-calculator",
        name: "Percentage Calculator",
        description: "Calculate percentages easily.",
        category: "calculators",
        icon: "fas fa-percent",
        url: "tools/percentage-calculator.html"
    },
    {
        id: "age-calculator",
        name: "Age Calculator",
        description: "Calculate age based on birth date.",
        category: "calculators",
        icon: "fas fa-birthday-cake",
        url: "tools/age-calculator.html"
    },
    {
        id: "bmi-calculator",
        name: "BMI Calculator",
        description: "Calculate Body Mass Index (BMI).",
        category: "calculators",
        icon: "fas fa-weight",
        url: "tools/bmi-calculator.html"
    },
    {
        id: "loan-emi-calculator",
        name: "Loan EMI Calculator",
        description: "Calculate Equated Monthly Installment (EMI) for loans.",
        category: "calculators",
        icon: "fas fa-money-bill-wave",
        url: "tools/loan-emi-calculator.html"
    },
    {
        id: "scientific-calculator",
        name: "Scientific Calculator",
        description: "Perform complex mathematical calculations.",
        category: "calculators",
        icon: "fas fa-calculator",
        url: "tools/scientific-calculator.html"
    },
    {
        id: "discount-calculator",
        name: "Discount Calculator",
        description: "Calculate discounts and final prices.",
        category: "calculators",
        icon: "fas fa-tags",
        url: "tools/discount-calculator.html"
    },
    {
        id: "currency-converter",
        name: "Currency Converter",
        description: "Convert between different currencies.",
        category: "calculators",
        icon: "fas fa-dollar-sign",
        url: "tools/currency-converter.html"
    },
    {
        id: "time-zone-converter",
        name: "Time Zone Converter",
        description: "Convert time between different time zones.",
        category: "calculators",
        icon: "fas fa-clock",
        url: "tools/time-zone-converter.html"
    },
    {
        id: "binary-decimal-converter",
        name: "Binary to Decimal Converter",
        description: "Convert between binary and decimal number systems.",
        category: "calculators",
        icon: "fas fa-exchange-alt",
        url: "tools/binary-decimal-converter.html"
    },
    {
        id: "tip-calculator",
        name: "Tip Calculator",
        description: "Calculate tips for restaurants and services.",
        category: "calculators",
        icon: "fas fa-utensils",
        url: "tools/tip-calculator.html"
    },

    // Unit Converters
    {
        id: "length-converter",
        name: "Length Converter",
        description: "Convert between different units of length.",
        category: "unit-converters",
        icon: "fas fa-ruler",
        url: "tools/length-converter.html"
    },
    {
        id: "weight-converter",
        name: "Weight Converter",
        description: "Convert between different units of weight.",
        category: "unit-converters",
        icon: "fas fa-weight-hanging",
        url: "tools/weight-converter.html"
    },
    {
        id: "speed-converter",
        name: "Speed Converter",
        description: "Convert between different units of speed.",
        category: "unit-converters",
        icon: "fas fa-tachometer-alt",
        url: "tools/speed-converter.html"
    },
    {
        id: "temperature-converter",
        name: "Temperature Converter",
        description: "Convert between different units of temperature.",
        category: "unit-converters",
        icon: "fas fa-thermometer-half",
        url: "tools/temperature-converter.html"
    },
    {
        id: "volume-converter",
        name: "Volume Converter",
        description: "Convert between different units of volume.",
        category: "unit-converters",
        icon: "fas fa-flask",
        url: "tools/volume-converter.html"
    },
    {
        id: "data-storage-converter",
        name: "Data Storage Converter",
        description: "Convert between different units of data storage.",
        category: "unit-converters",
        icon: "fas fa-database",
        url: "tools/data-storage-converter.html"
    },
    {
        id: "energy-converter",
        name: "Energy Converter",
        description: "Convert between different units of energy.",
        category: "unit-converters",
        icon: "fas fa-bolt",
        url: "tools/energy-converter.html"
    },
    {
        id: "pressure-converter",
        name: "Pressure Converter",
        description: "Convert between different units of pressure.",
        category: "unit-converters",
        icon: "fas fa-compress-arrows-alt",
        url: "tools/pressure-converter.html"
    },
    {
        id: "fuel-efficiency-converter",
        name: "Fuel Efficiency Converter",
        description: "Convert between different units of fuel efficiency.",
        category: "unit-converters",
        icon: "fas fa-gas-pump",
        url: "tools/fuel-efficiency-converter.html"
    },
    {
        id: "angle-converter",
        name: "Angle Converter",
        description: "Convert between different units of angles.",
        category: "unit-converters",
        icon: "fas fa-circle-notch",
        url: "tools/angle-converter.html"
    },

    // Security & Encryption Tools
    {
        id: "md5-hash-generator",
        name: "MD5 Hash Generator",
        description: "Generate MD5 hashes for text or files.",
        category: "security-tools",
        icon: "fas fa-lock",
        url: "tools/md5-hash-generator.html"
    },
    {
        id: "sha256-hash-generator",
        name: "SHA256 Hash Generator",
        description: "Generate SHA256 hashes for text or files.",
        category: "security-tools",
        icon: "fas fa-shield-alt",
        url: "tools/sha256-hash-generator.html"
    },
    {
        id: "password-generator",
        name: "Password Generator",
        description: "Generate strong, secure passwords.",
        category: "security-tools",
        icon: "fas fa-key",
        url: "tools/password-generator.html"
    },
    {
        id: "random-string-generator",
        name: "Random String Generator",
        description: "Generate random strings for various purposes.",
        category: "security-tools",
        icon: "fas fa-random",
        url: "tools/random-string-generator.html"
    },
    {
        id: "url-shortener",
        name: "URL Shortener",
        description: "Shorten long URLs for easier sharing.",
        category: "security-tools",
        icon: "fas fa-link",
        url: "tools/url-shortener.html"
    },
    {
        id: "ip-geolocation-finder",
        name: "IP Geolocation Finder",
        description: "Find the geographical location of an IP address.",
        category: "security-tools",
        icon: "fas fa-map-marker-alt",
        url: "tools/ip-geolocation-finder.html"
    },
    {
        id: "ssl-certificate-checker",
        name: "SSL Certificate Checker",
        description: "Check SSL certificates for websites.",
        category: "security-tools",
        icon: "fas fa-certificate",
        url: "tools/ssl-certificate-checker.html"
    },
    {
        id: "whois-lookup",
        name: "Whois Lookup",
        description: "Look up domain registration information.",
        category: "security-tools",
        icon: "fas fa-search",
        url: "tools/whois-lookup.html"
    },
    {
        id: "http-headers-checker",
        name: "HTTP Headers Checker",
        description: "Check HTTP headers for websites.",
        category: "security-tools",
        icon: "fas fa-code",
        url: "tools/http-headers-checker.html"
    },
    {
        id: "privacy-policy-generator",
        name: "Privacy Policy Generator",
        description: "Generate privacy policies for websites.",
        category: "security-tools",
        icon: "fas fa-file-alt",
        url: "tools/privacy-policy-generator.html"
    },

    // Social Media Tools
    {
        id: "youtube-thumbnail-downloader",
        name: "YouTube Thumbnail Downloader",
        description: "Download thumbnails from YouTube videos.",
        category: "social-media-tools",
        icon: "fab fa-youtube",
        url: "tools/youtube-thumbnail-downloader.html"
    },
    {
        id: "instagram-photo-downloader",
        name: "Instagram Photo Downloader",
        description: "Download photos from Instagram.",
        category: "social-media-tools",
        icon: "fab fa-instagram",
        url: "tools/instagram-photo-downloader.html"
    },
    {
        id: "twitter-video-downloader",
        name: "Twitter Video Downloader",
        description: "Download videos from Twitter.",
        category: "social-media-tools",
        icon: "fab fa-twitter",
        url: "tools/twitter-video-downloader.html"
    },
    {
        id: "facebook-video-downloader",
        name: "Facebook Video Downloader",
        description: "Download videos from Facebook.",
        category: "social-media-tools",
        icon: "fab fa-facebook",
        url: "tools/facebook-video-downloader.html"
    },
    {
        id: "tiktok-video-downloader",
        name: "TikTok Video Downloader",
        description: "Download videos from TikTok.",
        category: "social-media-tools",
        icon: "fab fa-tiktok",
        url: "tools/tiktok-video-downloader.html"
    },
    {
        id: "youtube-tags-extractor",
        name: "YouTube Tags Extractor",
        description: "Extract tags from YouTube videos.",
        category: "social-media-tools",
        icon: "fas fa-tags",
        url: "tools/youtube-tags-extractor.html"
    },
    {
        id: "hashtag-generator",
        name: "Hashtag Generator",
        description: "Generate hashtags for social media posts.",
        category: "social-media-tools",
        icon: "fas fa-hashtag",
        url: "tools/hashtag-generator.html"
    },
    {
        id: "social-media-post-generator",
        name: "Social Media Post Generator",
        description: "Generate posts for social media platforms.",
        category: "social-media-tools",
        icon: "fas fa-share-alt",
        url: "tools/social-media-post-generator.html"
    },
    {
        id: "emoji-keyboard",
        name: "Emoji Keyboard",
        description: "Find and copy emojis for social media.",
        category: "social-media-tools",
        icon: "far fa-smile",
        url: "tools/emoji-keyboard.html"
    },
    {
        id: "twitter-character-counter",
        name: "Twitter Character Counter",
        description: "Count characters for Twitter posts.",
        category: "social-media-tools",
        icon: "fas fa-text-width",
        url: "tools/twitter-character-counter.html"
    },

    // Miscellaneous Tools
    {
        id: "barcode-generator",
        name: "Barcode Generator",
        description: "Generate barcodes for products or inventory.",
        category: "miscellaneous",
        icon: "fas fa-barcode",
        url: "tools/barcode-generator.html"
    },
    {
        id: "meme-generator",
        name: "Meme Generator",
        description: "Create memes with custom text.",
        category: "miscellaneous",
        icon: "far fa-laugh-squint",
        url: "tools/meme-generator.html"
    },
    {
        id: "resume-builder",
        name: "Resume Builder",
        description: "Build professional resumes easily.",
        category: "miscellaneous",
        icon: "fas fa-file-alt",
        url: "tools/resume-builder.html"
    },
    {
        id: "invoice-generator",
        name: "Invoice Generator",
        description: "Generate professional invoices.",
        category: "miscellaneous",
        icon: "fas fa-file-invoice-dollar",
        url: "tools/invoice-generator.html"
    },
    {
        id: "business-name-generator",
        name: "Business Name Generator",
        description: "Generate creative business names.",
        category: "miscellaneous",
        icon: "fas fa-building",
        url: "tools/business-name-generator.html"
    },
    {
        id: "lottery-number-generator",
        name: "Lottery Number Generator",
        description: "Generate random lottery numbers.",
        category: "miscellaneous",
        icon: "fas fa-ticket-alt",
        url: "tools/lottery-number-generator.html"
    },
    {
        id: "flip-a-coin",
        name: "Flip a Coin Simulator",
        description: "Simulate flipping a coin.",
        category: "miscellaneous",
        icon: "fas fa-coins",
        url: "tools/flip-a-coin.html"
    },
    {
        id: "random-number-generator",
        name: "Random Number Generator",
        description: "Generate random numbers within a range.",
        category: "miscellaneous",
        icon: "fas fa-dice",
        url: "tools/random-number-generator.html"
    },
    {
        id: "dice-roller",
        name: "Dice Roller Simulator",
        description: "Simulate rolling dice.",
        category: "miscellaneous",
        icon: "fas fa-dice-d20",
        url: "tools/dice-roller.html"
    },
    {
        id: "internet-speed-test",
        name: "Internet Speed Test",
        description: "Test your internet connection speed.",
        category: "miscellaneous",
        icon: "fas fa-tachometer-alt",
        url: "tools/internet-speed-test.html"
    },
    {
        id: "daily-planner",
        name: "Daily Planner Creator",
        description: "Create a daily planner to organize your day.",
        category: "miscellaneous",
        icon: "fas fa-calendar-day",
        url: "tools/daily-planner.html"
    },
    {
        id: "wedding-invitation-generator",
        name: "Wedding Invitation Generator",
        description: "Generate beautiful wedding invitations.",
        category: "miscellaneous",
        icon: "fas fa-heart",
        url: "tools/wedding-invitation-generator.html"
    },
    {
        id: "story-plot-generator",
        name: "Story Plot Generator",
        description: "Generate creative story plots for writing.",
        category: "miscellaneous",
        icon: "fas fa-book",
        url: "tools/story-plot-generator.html"
    },
    {
        id: "ebook-creator",
        name: "E-book Creator",
        description: "Create e-books from your content.",
        category: "miscellaneous",
        icon: "fas fa-book-open",
        url: "tools/ebook-creator.html"
    },
    {
        id: "ai-chatbot-demo",
        name: "AI Chatbot Demo",
        description: "Try out a simple AI chatbot.",
        category: "miscellaneous",
        icon: "fas fa-robot",
        url: "tools/ai-chatbot-demo.html"
    },
    {
        id: "ip-address-tracker",
        name: "IP Address Tracker",
        description: "Track and locate IP addresses.",
        category: "miscellaneous",
        icon: "fas fa-map-marked-alt",
        url: "tools/ip-address-tracker.html"
    },
    {
        id: "fake-address-generator",
        name: "Fake Address Generator",
        description: "Generate fake addresses for testing purposes.",
        category: "miscellaneous",
        icon: "fas fa-address-card",
        url: "tools/fake-address-generator.html"
    },
    {
        id: "electric-bill-calculator",
        name: "Calculator for Electric Bills",
        description: "Calculate your electric bill based on usage.",
        category: "miscellaneous",
        icon: "fas fa-bolt",
        url: "tools/electric-bill-calculator.html"
    },
    {
        id: "leap-year-checker",
        name: "Leap Year Checker",
        description: "Check if a year is a leap year.",
        category: "miscellaneous",
        icon: "fas fa-calendar-alt",
        url: "tools/leap-year-checker.html"
    },
    {
        id: "numerology-calculator",
        name: "Name to Numerology Calculator",
        description: "Calculate numerology values based on names.",
        category: "miscellaneous",
        icon: "fas fa-sort-numeric-up",
        url: "tools/numerology-calculator.html"
    }
]; 