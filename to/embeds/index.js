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
  out += '<!-- Primary / SEO -->\n';
  out += '<title>'+t('title')+'</title>\n';
  out += '<meta name="description" content="'+t('description')+'">\n\n';
  out += '<!-- Open Graph -->\n';
  out += '<meta property="og:type" content="'+t('ogType')+'">\n';
  out += '<meta property="og:url" content="'+t('ogUrl')+'">\n';
  out += '<meta property="og:title" content="'+t('ogTitle')+'">\n';
  out += '<meta property="og:description" content="'+t('ogDescription')+'">\n';
  out += '<meta property="og:image" content="'+t('ogImage')+'">\n';
  out += '<meta property="og:image:width" content="'+t('ogImageWidth')+'">\n';
  out += '<meta property="og:image:height" content="'+t('ogImageHeight')+'">\n';
  out += '<meta property="og:image:alt" content="'+t('ogImageAlt')+'">\n';
  out += '<meta property="og:site_name" content="'+t('ogSiteName')+'">\n';
  out += '<meta property="og:locale" content="'+t('ogLocale')+'">\n\n';
  out += '<!-- Twitter / X -->\n';
  out += '<meta name="twitter:card" content="'+t('twitterCard')+'">\n';
  out += '<meta name="twitter:site" content="'+t('twitterSite')+'">\n';
  out += '<meta name="twitter:creator" content="'+t('twitterCreator')+'">\n';
  out += '<meta name="twitter:title" content="'+t('twitterTitle')+'">\n';
  out += '<meta name="twitter:description" content="'+t('twitterDescription')+'">\n';
  out += '<meta name="twitter:image" content="'+t('twitterImage')+'">\n';
  out += '<meta name="twitter:image:alt" content="'+t('twitterImageAlt')+'">\n\n';
  out += '<!-- Discord -->\n';
  out += '<meta name="theme-color" content="'+t('themeColor')+'">\n';
  document.getElementById('output').value = out;
  updatePreviews();
}

updatePreviews();
