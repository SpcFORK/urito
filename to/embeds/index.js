function t(id){return document.getElementById(id).value.trim()}

function updatePreviews(){
  let title = t('ogTitle') || t('title') || 'Title';
  let site  = t('ogSiteName') || 'Site';
  let img   = t('ogImage') || '';
  ['discord','x','fb','li'].forEach(function(p){
    let el = document.getElementById('prev-'+p);
    el.style.backgroundImage = img ? 'url('+img+')' : 'none';
    document.getElementById('prev-'+p+'-title').textContent = title;
    document.getElementById('prev-'+p+'-site').textContent = site;
  });
}

function generate(){
  let out = '';
  out += '<title>'+t('title')+'</title>';
  out += '<meta name="description" content="'+t('description')+'">';
  out += '<!-- Open Graph -->';
  out += '<meta property="og:type" content="'+t('ogType')+'">';
  out += '<meta property="og:url" content="'+t('ogUrl')+'">';
  out += '<meta property="og:title" content="'+t('ogTitle')+'">';
  out += '<meta property="og:description" content="'+t('ogDescription')+'">';
  out += '<meta property="og:image" content="'+t('ogImage')+'">';
  out += '<meta property="og:image:width" content="'+t('ogImageWidth')+'">';
  out += '<meta property="og:image:height" content="'+t('ogImageHeight')+'">';
  out += '<meta property="og:image:alt" content="'+t('ogImageAlt')+'">';
  out += '<meta property="og:site_name" content="'+t('ogSiteName')+'">';
  out += '<meta property="og:locale" content="'+t('ogLocale')+'">';
  out += '<!-- Twitter / X -->';
  out += '<meta name="twitter:card" content="'+t('twitterCard')+'">';
  out += '<meta name="twitter:site" content="'+t('twitterSite')+'">';
  out += '<meta name="twitter:creator" content="'+t('twitterCreator')+'">';
  out += '<meta name="twitter:title" content="'+t('twitterTitle')+'">';
  out += '<meta name="twitter:description" content="'+t('twitterDescription')+'">';
  out += '<meta name="twitter:image" content="'+t('twitterImage')+'">';
  out += '<meta name="twitter:image:alt" content="'+t('twitterImageAlt')+'">';
  out += '<!-- Discord -->';
  out += '<meta name="theme-color" content="'+t('themeColor')+'">';
  document.getElementById('output').value = out;
  updatePreviews();
}

updatePreviews();
