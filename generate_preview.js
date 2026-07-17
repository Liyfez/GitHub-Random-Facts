const fs = require('fs');
const path = require('path');

// 1. The Theme Configuration
const themes = {
  // --- Dark Themes ---
  dark_blue:        { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4DA6FF' },
  dark_red:         { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FF4D4D' },
  dark_orange:      { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FF974D' },
  dark_yellow:      { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FFFC4D' },
  dark_green:       { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4DFF50' },
  dark_ocean_blue:  { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4DFFE4' },
  dark_ocean:       { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4DD5FF' },
  dark_indigo:      { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#4D4DFF' },
  dark_purple:      { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#974DFF' },
  dark_pink:        { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FF4DED' },
  dark_radical_red: { bgColor: '#151515', textColor: '#B0B0B0', quoteColor: '#FF4D8E' },
  dracula:          { bgColor: '#282A36', textColor: '#F8F8F2', quoteColor: '#FF79C6' },
  ocean:            { bgColor: '#0F1C2E', textColor: '#A3B8D6', quoteColor: '#38BDAE' },
  midnight:         { bgColor: '#0F141A', textColor: '#C7D1E0', quoteColor: '#5AA6FF' },
  nebula:           { bgColor: '#12171F', textColor: '#E3D7FF', quoteColor: '#B084FF' },
  deep_ocean:       { bgColor: '#131B24', textColor: '#A5C4DA', quoteColor: '#3EE5C7' },
  amethyst:         { bgColor: '#161B22', textColor: '#D6C7FF', quoteColor: '#A05BFF' },
  neo_pink:         { bgColor: '#12171F', textColor: '#F5E9F7', quoteColor: '#FF4DBF' },
  inferno:          { bgColor: '#1A222C', textColor: '#E6C8C8', quoteColor: '#FF6A4D' },
  jade:             { bgColor: '#0F141A', textColor: '#C9F1D0', quoteColor: '#49FF87' },
  arctic:           { bgColor: '#131B24', textColor: '#D4E9F5', quoteColor: '#73D5FF' },
  azure:            { bgColor: '#161B22', textColor: '#BFD8FF', quoteColor: '#4D8CFF' },
  crimson_core:     { bgColor: '#12171F', textColor: '#E9C1C1', quoteColor: '#FF3B6B' },

  // --- Light Themes ---
  light_blue:       { bgColor: '#EAF4FF', textColor: '#111111', quoteColor: '#4DA6FF' },
  light_red:        { bgColor: '#FFEAEB', textColor: '#111111', quoteColor: '#FF4D4D' },
  light_orange:     { bgColor: '#FFF3EA', textColor: '#111111', quoteColor: '#FF974D' },
  light_yellow:     { bgColor: '#FFFCEA', textColor: '#111111', quoteColor: '#E5D200' },
  light_green:      { bgColor: '#EAF8EE', textColor: '#111111', quoteColor: '#00C73A' },
  light_ocean_blue: { bgColor: '#EAF9F6', textColor: '#111111', quoteColor: '#00D4B8' },
  light_ocean:      { bgColor: '#EAF7FF', textColor: '#111111', quoteColor: '#25C2FF' },
  light_indigo:     { bgColor: '#EBEAFF', textColor: '#111111', quoteColor: '#4D4DFF' },
  light_purple:     { bgColor: '#F3EAFF', textColor: '#111111', quoteColor: '#974DFF' },
  light_pink:       { bgColor: '#FFEAFD', textColor: '#111111', quoteColor: '#FF4DED' },
  light_radical_red:{ bgColor: '#FFEAF1', textColor: '#111111', quoteColor: '#FF4D8E' },
  frost:            { bgColor: '#F7F9FC', textColor: '#0D1117', quoteColor: '#4D8CFF' },
  polar_day:        { bgColor: '#F5FAFF', textColor: '#1A2738', quoteColor: '#47C5FF' },
  silver_mist:      { bgColor: '#F2F4F7', textColor: '#222831', quoteColor: '#8A7BFF' },
  cloudveil:        { bgColor: '#FAFAFA', textColor: '#202428', quoteColor: '#FF7ACB' },
  dawnlight:        { bgColor: '#FFFDF7', textColor: '#2C2F36', quoteColor: '#FF8E5A' },
  willow:           { bgColor: '#F8FBF8', textColor: '#1F2A22', quoteColor: '#3DDC84' },
  tide:             { bgColor: '#F3FAF9', textColor: '#1A2C2A', quoteColor: '#32D6C5' },
  ether:            { bgColor: '#F6F6FF', textColor: '#27273A', quoteColor: '#9A6DFF' },
  nimbus:           { bgColor: '#F4F6F8', textColor: '#1D232B', quoteColor: '#5AA6FF' },
  crystal:          { bgColor: '#F0F7FF', textColor: '#1B2B3A', quoteColor: '#68B9FF' }
};

// 2. Create the directory
const outputDir = './assets/themes';
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// 3. Generate SVGs
Object.keys(themes).forEach(key => {
    const t = themes[key];
    const svgContent = `<svg width="260" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect width="260" height="80" rx="10" fill="${t.bgColor}"/>
  <text x="20" y="50" fill="${t.quoteColor}" font-family="Georgia" font-size="32">“</text>
  <text x="130" y="50" text-anchor="middle" font-family="Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="18" fill="${t.textColor}">${key}</text>
  <text x="240" y="50" fill="${t.quoteColor}" font-family="Georgia" font-size="32">”</text>
</svg>`;
    
    fs.writeFileSync(path.join(outputDir, `${key}.svg`), svgContent);
    console.log(`Generated ${key}.svg`);
});

console.log('✅ All theme previews generated in /assets/themes/');