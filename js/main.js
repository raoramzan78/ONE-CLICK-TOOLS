// Load header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Initialize dropdown after header is loaded
            const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
            const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));
        });
    
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
    
    // Load tools
    loadTools();
    
    // Initialize search functionality
    initSearch();
});

// Load tools into their respective containers
function loadTools() {
    // Group tools by category
    const toolsByCategory = toolsData.reduce((acc, tool) => {
        if (!acc[tool.category]) {
            acc[tool.category] = [];
        }
        acc[tool.category].push(tool);
        return acc;
    }, {});
    
    // Populate each category container
    for (const category in toolsByCategory) {
        const containerId = `${category}-container`;
        const container = document.getElementById(containerId);
        
        if (container) {
            toolsByCategory[category].forEach(tool => {
                container.appendChild(createToolCard(tool));
            });
        }
    }
}

// Create a tool card element
function createToolCard(tool) {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3';
    col.setAttribute('data-tool-id', tool.id);
    col.setAttribute('data-tool-name', tool.name.toLowerCase());
    col.setAttribute('data-tool-description', tool.description.toLowerCase());
    
    // Get category color class
    const categoryClass = getCategoryColorClass(tool.category);
    
    col.innerHTML = `
        <div class="card tool-card">
            <div style="position: absolute; top: 0; left: 0; width: 4px; height: 0; background: ${categoryClass.primary}; transition: height 0.3s ease;" class="card-border"></div>
            <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                    <div class="tool-icon-container" style="background: ${categoryClass.gradient};">
                        <i class="${tool.icon} fa-lg" style="color: white;"></i>
                    </div>
                    <h5 class="card-title mb-0">${tool.name}</h5>
                </div>
                <p class="card-text">${tool.description}</p>
                <a href="${tool.url}" class="btn" style="background: ${categoryClass.gradient}; color: white; border: none;">Use Tool</a>
            </div>
        </div>
    `;
    
    // Add hover effects
    const card = col.querySelector('.card');
    const border = col.querySelector('.card-border');
    
    card.addEventListener('mouseenter', function() {
        border.style.height = '100%';
        card.style.boxShadow = categoryClass.shadow;
    });
    
    card.addEventListener('mouseleave', function() {
        border.style.height = '0';
        card.style.boxShadow = 'none';
    });
    
    return col;
}

// Get category color for styling
function getCategoryColorClass(category) {
    const colorMap = {
        'image-tools': {
            primary: '#4a6cf7',
            gradient: 'linear-gradient(135deg, #4a6cf7, #00c6ff)',
            shadow: '0 3px 10px rgba(74, 108, 247, 0.2)'
        },
        'seo-tools': {
            primary: '#ff6b6b',
            gradient: 'linear-gradient(135deg, #ff6b6b, #ff2d95)',
            shadow: '0 3px 10px rgba(255, 107, 107, 0.2)'
        },
        'text-tools': {
            primary: '#20c997',
            gradient: 'linear-gradient(135deg, #20c997, #0cebeb)',
            shadow: '0 3px 10px rgba(32, 201, 151, 0.2)'
        },
        'developer-tools': {
            primary: '#6f42c1',
            gradient: 'linear-gradient(135deg, #6f42c1, #a259ff)',
            shadow: '0 3px 10px rgba(111, 66, 193, 0.2)'
        },
        'calculators': {
            primary: '#fd7e14',
            gradient: 'linear-gradient(135deg, #fd7e14, #ffb347)',
            shadow: '0 3px 10px rgba(253, 126, 20, 0.2)'
        },
        'unit-converters': {
            primary: '#0dcaf0',
            gradient: 'linear-gradient(135deg, #0dcaf0, #4facfe)',
            shadow: '0 3px 10px rgba(13, 202, 240, 0.2)'
        },
        'security-tools': {
            primary: '#198754',
            gradient: 'linear-gradient(135deg, #198754, #00b09b)',
            shadow: '0 3px 10px rgba(25, 135, 84, 0.2)'
        },
        'social-media-tools': {
            primary: '#d63384',
            gradient: 'linear-gradient(135deg, #d63384, #f857a6)',
            shadow: '0 3px 10px rgba(214, 51, 132, 0.2)'
        },
        'miscellaneous': {
            primary: '#6c757d',
            gradient: 'linear-gradient(135deg, #6c757d, #868e96)',
            shadow: '0 3px 10px rgba(108, 117, 125, 0.2)'
        }
    };
    
    return colorMap[category] || colorMap['image-tools'];
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('search-tools');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            // Get all tool cards
            const toolCards = document.querySelectorAll('[data-tool-id]');
            
            // Filter tools based on search term
            toolCards.forEach(card => {
                const toolName = card.getAttribute('data-tool-name');
                const toolDescription = card.getAttribute('data-tool-description');
                
                if (toolName.includes(searchTerm) || toolDescription.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show/hide empty category sections and expand/collapse as needed
            document.querySelectorAll('.category-accordion').forEach(accordion => {
                const categoryId = accordion.id.replace('-accordion', '');
                const collapseElement = document.getElementById(`${categoryId}-collapse`);
                const container = document.getElementById(`${categoryId}-container`);
                
                if (container) {
                    const visibleTools = container.querySelectorAll('[data-tool-id]:not([style*="display: none"])');
                    
                    if (visibleTools.length === 0) {
                        // Hide the entire accordion if no tools match
                        accordion.style.display = 'none';
                    } else {
                        // Show the accordion and expand it if it contains matching tools
                        accordion.style.display = '';
                        
                        if (searchTerm && collapseElement && !collapseElement.classList.contains('show')) {
                            // Expand the category if it contains matching tools
                            new bootstrap.Collapse(collapseElement, { toggle: true });
                            
                            // Update the button state
                            const button = accordion.querySelector('.category-button');
                            if (button) {
                                button.classList.remove('collapsed');
                                button.setAttribute('aria-expanded', 'true');
                            }
                        }
                    }
                }
            });
            
            // If search is cleared, collapse all except the first one
            if (!searchTerm) {
                document.querySelectorAll('.category-accordion').forEach((accordion, index) => {
                    const categoryId = accordion.id.replace('-accordion', '');
                    const collapseElement = document.getElementById(`${categoryId}-collapse`);
                    
                    if (collapseElement) {
                        if (index === 0) {
                            // Keep the first category expanded
                            new bootstrap.Collapse(collapseElement, { toggle: false });
                            collapseElement.classList.add('show');
                            
                            const button = accordion.querySelector('.category-button');
                            if (button) {
                                button.classList.remove('collapsed');
                                button.setAttribute('aria-expanded', 'true');
                            }
                        } else {
                            // Collapse all other categories
                            new bootstrap.Collapse(collapseElement, { toggle: false });
                            collapseElement.classList.remove('show');
                            
                            const button = accordion.querySelector('.category-button');
                            if (button) {
                                button.classList.add('collapsed');
                                button.setAttribute('aria-expanded', 'false');
                            }
                        }
                    }
                });
            }
        });
    }
}

// Function to get related tools for a specific tool
function getRelatedTools(currentToolId, category, count = 5) {
    return toolsData
        .filter(tool => tool.category === category && tool.id !== currentToolId)
        .sort(() => 0.5 - Math.random()) // Shuffle
        .slice(0, count);
}

// Function to render related tools in a sidebar
function renderRelatedTools(currentToolId, category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const relatedTools = getRelatedTools(currentToolId, category);
    
    const ul = document.createElement('ul');
    ul.className = 'related-tools';
    
    relatedTools.forEach(tool => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${tool.url}"><i class="${tool.icon} me-2"></i> ${tool.name}</a>`;
        ul.appendChild(li);
    });
    
    container.appendChild(ul);
} 