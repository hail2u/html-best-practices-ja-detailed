# `audio`や`video`要素にフォールバックのためのコンテンツを提供する

HTMLで新しく作られた要素にはフォールバックのためのコンテンツが必要です。

悪い例:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

良い例:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>

「[`picture`要素ではフォールバックのための`img`要素を提供する][1]」を参照してください。

[1]: provide-fallback-img-element-for-picture-element.ja.md
