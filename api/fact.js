const facts = require('./facts.json');

module.exports = (req, res) => {
  if (!facts || facts.length === 0) {
    const errorSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="50">
      <text x="10" y="30" style="font-family: monospace; fill: red;">ERROR: Facts file is empty!</text>
    </svg>`;
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.send(errorSVG);
  }

  // --- 1. Define your Themes here ---
  const themes = {
    dark_blue: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#4DA6FF'
    },
    dark_red: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#FF4D4D'
    },
    dark_orange: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#FF974D'
    },
    dark_yellow: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#FFFC4D'
    },
    dark_green: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#4DFF50'
    },
    dark_ocean_blue: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#4DFFE4'
    },
    dark_ocean: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#4DD5FF'
    },
    dark_indigo: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#4D4DFF'
    },
    dark_purple: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#974DFF'
    },
    dark_pink: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#FF4DED'
    },
    dark_radical_red: {
      bgColor: '#151515',
      textColor: '#B0B0B0',
      quoteColor: '#FF4D8E'
    },
    dracula: {
      bgColor: '#282A36',
      textColor: '#F8F8F2',
      quoteColor: '#FF79C6'
    },
    ocean: {
      bgColor: '#0F1C2E',
      textColor: '#A3B8D6',
      quoteColor: '#38BDAE'
    },
    midnight: {
      bgColor: '#0F141A',
      textColor: '#C7D1E0',
      quoteColor: '#5AA6FF'
    },
    nebula: {
      bgColor: '#12171F',
      textColor: '#E3D7FF',
      quoteColor: '#B084FF'
    },
    deep_ocean: {
      bgColor: '#131B24',
      textColor: '#A5C4DA',
      quoteColor: '#3EE5C7'
    },
    amethyst: {
      bgColor: '#161B22',
      textColor: '#D6C7FF',
      quoteColor: '#A05BFF'
    },
    neo_pink: {
      bgColor: '#12171F',
      textColor: '#F5E9F7',
      quoteColor: '#FF4DBF'
    },
    inferno: {
      bgColor: '#1A222C',
      textColor: '#E6C8C8',
      quoteColor: '#FF6A4D'
    },
    jade: {
      bgColor: '#0F141A',
      textColor: '#C9F1D0',
      quoteColor: '#49FF87'
    },
    arctic: {
      bgColor: '#131B24',
      textColor: '#D4E9F5',
      quoteColor: '#73D5FF'
    },
    azure: {
      bgColor: '#161B22',
      textColor: '#BFD8FF',
      quoteColor: '#4D8CFF'
    },
    crimson_core: {
      bgColor: '#12171F',
      textColor: '#E9C1C1',
      quoteColor: '#FF3B6B'
    },
    cyber_neon: {
      bgColor: '#090A0F',
      textColor: '#FCEE0A',
      quoteColor: '#FF003C'
    },
    light_blue: {
      bgColor: '#D9ECFF',
      textColor: '#003B73',
      quoteColor: '#0078D7'
    },
    light_red: {
      bgColor: '#FFD6D6',
      textColor: '#800000',
      quoteColor: '#E60000'
    },
    light_orange: {
      bgColor: '#FFE5CC',
      textColor: '#8C4000',
      quoteColor: '#FF7300'
    },
    light_yellow: {
      bgColor: '#FFF5CC',
      textColor: '#735900',
      quoteColor: '#D4A000'
    },
    light_green: {
      bgColor: '#D6F5D6',
      textColor: '#004D00',
      quoteColor: '#009900'
    },
    light_ocean_blue: {
      bgColor: '#CCF5F0',
      textColor: '#004D40',
      quoteColor: '#00B398'
    },
    light_ocean: {
      bgColor: '#CCEFFF',
      textColor: '#004C80',
      quoteColor: '#0099FF'
    },
    light_indigo: {
      bgColor: '#E0E0FF',
      textColor: '#202080',
      quoteColor: '#4D4DFF'
    },
    light_purple: {
      bgColor: '#ECD9FF',
      textColor: '#400080',
      quoteColor: '#8C1AFF'
    },
    light_pink: {
      bgColor: '#FFD9FA',
      textColor: '#80006B',
      quoteColor: '#FF1AE6'
    },
    light_radical_red: {
      bgColor: '#FFD6E6',
      textColor: '#800033',
      quoteColor: '#FF1A75'
    },
    frost: {
      bgColor: '#D4F1F4',
      textColor: '#05445E',
      quoteColor: '#189AB4'
    },
    polar_day: {
      bgColor: '#FDFBF7',
      textColor: '#1E3D59',
      quoteColor: '#FFC13B'
    },
    silver_mist: {
      bgColor: '#E2E8F0',
      textColor: '#334155',
      quoteColor: '#94A3B8'
    },
    cloudveil: {
      bgColor: '#FFE4F2',
      textColor: '#590D22',
      quoteColor: '#FF8FAB'
    },
    dawnlight: {
      bgColor: '#FFF0D4',
      textColor: '#5C3A21',
      quoteColor: '#F08A5D'
    },
    willow: {
      bgColor: '#E0F2E9',
      textColor: '#204E4A',
      quoteColor: '#4CAF50'
    },
    tide: {
      bgColor: '#C2F0FC',
      textColor: '#004C6D',
      quoteColor: '#0096C7'
    },
    ether: {
      bgColor: '#EFE6FF',
      textColor: '#240046',
      quoteColor: '#9D4EDD'
    },
    nimbus: {
      bgColor: '#D9E2E8',
      textColor: '#2B2D42',
      quoteColor: '#8D99AE'
    },
    crystal: {
      bgColor: '#E0FFFF',
      textColor: '#0B0C10',
      quoteColor: '#66FCF1'
    },
    matcha_latte: {
      bgColor: '#E8F5E9',
      textColor: '#1B5E20',
      quoteColor: '#8BC34A'
    },
    sunset_glow: {
      bgColor: '#FFEBEE',
      textColor: '#BF360C',
      quoteColor: '#FF5722'
    },
    lavender_mist: {
      bgColor: '#F3E5F5',
      textColor: '#4A148C',
      quoteColor: '#AB47BC'
    }
  };

  // --- 2. Get the requested theme from URL (default to 'dark') ---
  // req.query.theme looks for ?theme=xyz in the URL
  const requestedTheme = req.query.theme || 'dark';
  
  // Select the theme config, or fallback to 'dark' if the name doesn't exist
  const currentTheme = themes[requestedTheme] || themes.dark;

  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];
  const factText = fact && fact.text ? fact.text : "Error loading fact text.";

  const width = 650;
  const height = 180;
  
  // --- 3. Use the dynamic colors ---
  const { bgColor, textColor, quoteColor } = currentTheme;

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${width}" height="${height}" fill="${bgColor}" rx="8" />
      <foreignObject x="20" y="20" width="${width - 40}" height="${height - 40}">
        <div xmlns="http://www.w3.org/1999/xhtml" style="
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          height: 100%;
          box-sizing: border-box;
        ">
          <p style="color: ${textColor}; font-size: 22px; font-weight: 400; font-style: italic; line-height: 1.4; margin: 0; padding: 0; text-align: left;">
            <span style="color: ${quoteColor}; font-size: 28px; font-family: 'Georgia', serif;">“</span>
            ${factText}
            <span style="color: ${quoteColor}; font-size: 28px; font-family: 'Georgia', serif;">”</span>
          </p>
        </div>
      </foreignObject>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  res.send(svg);
};
