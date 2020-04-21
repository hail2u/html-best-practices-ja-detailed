# `style`要素の中をコメントアウトしない

この儀式は古いブラウザーのためです。

悪い例:

    <style>
    <!--
      ...
      -->
    </style>

良い例:

    <style>
      ...
    </style>

「[`script`要素の中をコメントアウトしない](dont-comment-out-contents-of-script-element.ja.md)」を参照してください。
