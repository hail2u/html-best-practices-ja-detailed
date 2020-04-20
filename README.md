普通のHTMLの書き方
==================

保守しやすく、規模に依存しないHTML文書のために


- 一般
    - [DOCTYPEで始める](start-with-doctype.md)
    - [置き換えられるべきまたは旧式のDOCTYPEを使わない](dont-use-legacy-or-obsolete-doctype.md)
    - [XML宣言を使用しない](dont-use-xml-declaration.md)
    - [文字参照はできる限り使わない](dont-use-character-references-as-much-as-possible.md)
    - [`&`と`<`、`>`、`"`、`'`は名前文字参照を使ってエスケープする](escape-----and--with-named-character-references.md)
    - [制御文字や不可視文字は数値文字参照を使う](use-numeric-character-references-for-control-or-invisible-characters.md)
    - [コメントではその内容の前後へ空白文字を置く](put-white-spaces-around-comment-contents.md)
    - [終了タグを省略しない](dont-omit-closing-tag.md)
    - [空要素の書き方を混ぜない](dont-mix-empty-element-format.md)
    - [タグや属性値の前後へ空白文字を置かない](dont-put-white-spaces-around-tags-and-attribute-values.md)
    - [大文字・小文字を混ぜない](dont-mix-character-cases.md)
    - [引用符を混ぜない](dont-mix-quotation-marks.md)
    - [属性を2文字以上の空白文字で区切らない](dont-separate-attributes-with-two-or-more-white-spaces.md)
    - [真偽値を取る属性の値は省略する](omit-boolean-attribute-value.md)
    - [名前空間は省略する](omit-namespaces.md)
    - [XML属性は使わない](dont-use-xml-attributes.md)
    - [`data-*`とMicrodata、RDFa Lite用の属性と通常の属性を混ぜない](dont-mix-data--microdata-and-rdfa-lite-attributes-with-common-attributes.md)
    - [デフォルトの暗黙のARIAセマンティックスを尊重する](prefer-default-implicit-aria-semantics.md)
- 文書要素
    - [`lang`属性を追加する](add-lang-attribute.md)
    - [`lang`属性の値はできる限り短くする](keep-lang-attribute-value-as-short-as-possible.md)
    - [できる限り`data-*`属性は避ける](avoid-data--as-much-as-possible.md)
- 文書メタデータ
    - [`title`要素を書く](add-title-element.md)
    - [`base`要素を使わない](dont-use-base-element.md)
    - [マイナーな参照先リソースのMIMEタイプを指定する](specify-mime-type-of-minor-linked-resources.md)
    - [`favicon.ico`へリンクしない](dont-link-to-faviconico.md)
    - [`apple-touch-icon`へのリンクを書く](add-apple-touch-icon-link.md)
    - [代替スタイルシートへ`title`属性を追加する](add-title-attribute-to-alternate-stylesheets.md)
    - [URLには`link`要素を使う](for-url-use-link-element.md)
    - [文書の文字エンコーディングを指定する](specify-document-character-encoding.md)
    - [置き換えられるべき文字エンコーディング指定フォーマットを使わない](dont-use-legacy-character-encoding-format.md)
    - [最初に文字エンコーディングを指定する](specify-character-encoding-at-first.md)
    - [UTF-8を使う](use-utf-8.md)
    - [CSSの`type`属性は省略する](omit-type-attribute-for-css.md)
    - [`style`要素の中をコメントアウトしない](dont-comment-out-contents-of-style-element.md)
    - [CSSとJavaScriptのタグを混ぜない](dont-mix-tag-for-css-and-javascript.md)
- セクション
    - [`body`要素を書く](add-body-element.md)
    - [`hgroup`要素のことは忘れる](forget-about-hgroup-element.md)
    - [`address`要素は連絡先情報にのみ使う](use-address-element-only-for-contact-information.md)
- グルーピングコンテンツ
    - [`pre`要素は改行で始めない](dont-start-with-newline-in-pre-element.md)
    - [`blockquote`要素内でも適切な要素を使う](use-appropriate-element-in-blockquote-element.md)
    - [`blockquote`要素内に帰属情報を含めない](dont-include-attribution-directly-in-blockquote-element.md)
    - [リスト項目は1行に1つずつ書く](write-one-list-item-per-line.md)
    - [`ol`要素では`type`属性を使う](use-type-attribute-for-ol-element.md)
    - [`dl`を会話のために使わない](dont-use-dl-for-dialogue.md)
    - [`figcaption`要素は`figure`要素の最初か最後に置く](place-figcaption-element-as-first-or-last-child-of-figure-element.md)
    - [`main`要素を使う](use-main-element.md)
    - [できる限り`div`要素は避ける](avoid-div-element-as-much-as-possible.md)
- テキストレベルセマンティックス
    - [グループ化できるリンクは分割しない](dont-split-same-link-that-can-be-grouped.md)
    - [リソースをダウンロードさせる場合は`download`属性を使う](use-download-attribute-for-downloading-a-resource.md)
    - [`rel`や`hreflang`、`type`属性を必要ならば使う](use-rel-hreflang-and-type-attribute-if-needed.md)
    - [リンク文字列は明確にする](clear-link-text.md)
    - [`em`要素を警告や注意に使わない](dont-use-em-element-for-warning-or-caution.md)
    - [できる限り`s`や`i`、`b`、`u`要素を避ける](avoid-s-i-b-and-u-element-as-much-as-possible.md)
    - [`q`要素内へ引用符は置かない](dont-put-quotes-to-q-element.md)
    - [`abbr`要素へ`title`属性を追加する](add-title-attribute-to-abbr-element.md)
    - [`ruby`要素は冗長にマークアップする](markup-ruby-element-verbosely.md)
    - [機械的に解釈可能でない`time`要素では`datetime`属性を追加する](add-datetime-attribute-to-non-machine-readable-time-element.md)
    - [コードの言語は`class`属性で`language-`で始めることで指定する](specify-code-language-with-class-attribute-prefixed-with-language-.md)
    - [できる限り`kbd`要素はシンプルにする](keep-kbd-element-as-simple-as-possible.md)
    - [できる限り`span`要素は使わない](avoid-span-element-as-much-as-possible.md)
    - [`br`要素の後ろでは改行する](break-after-br-element.md)
    - [見た目だけのために`br`要素を使わない](dont-use-br-element-only-for-presentational-purpose.md)
- 編集
    - [`ins`や`del`要素は他の要素をまたがせない](dont-stride-ins-and-del-element-over-other-elements.md)
- エンベディッドコンテンツ
    - [`picture`要素ではフォールバックのための`img`要素を提供する](provide-fallback-img-element-for-picture-element.md)
    - [必要な時は`img`要素へ`alt`属性を追加する](add-alt-attrbute-to-img-element-if-needed.md)
    - [可能ならば`alt`属性は空にする](empty-alt-attribute-if-possible.md)
    - [可能ならば`alt`属性は省略する](omit-alt-attribute-if-possible.md)
    - [`iframe`要素の中は空にする](empty-iframe-element.md)
    - [`map`要素の中はマークアップする](markup-map-element-content.md)
    - [`audio`や`video`要素にフォールバックのためのコンテンツを提供する](provide-fallback-content-for-audio-or-video-element.md)
- テーブルデータ
    - [1行に1つのセルを書く](write-one-cell-per-line.md)
    - [見出しセルには`th`要素を使う](use-th-element-for-header-cell.md)
- フォーム
    - [フォームコントロールは`label`要素で括る](wrap-form-control-with-label-element.md)
    - [可能ならば`for`属性は省略する](omit-for-attribute-if-possible.md)
    - [`input`要素では適切な`type`属性を使う](use-appropriate-type-attribute-for-input-element.md)
    - [`input type="submit"`には`value`属性を追加する](add-value-attribute-to-input-typesubmit.md)
    - [`pattern`属性を持つ`input`要素には`title`属性を追加する](add-title-attribute-to-input-element-when-there-is-pattern-attribute.md)
    - [`placeholder`属性をラベル付けに使わない](dont-use-placeholder-attribute-for-labeling.md)
    - [`option`要素は1行に1つ書く](write-one-option-element-per-line.md)
    - [`progress`要素には`max`属性を追加する](add-max-attribute-to-progress-element.md)
    - [`meter`要素では`min`及び`max`属性を追加する](add-min-and-max-attribute-to-meter-element.md)
    - [`legend`要素は`fieldset`要素の最初に置く](place-legend-element-as-the-first-child-of-fieldset-element.md)
- スクリプティング
    - [JavaScriptでは`type`属性を省略する](omit-type-attribute-for-javascript.md)
    - [`script`要素の中をコメントアウトしない](dont-comment-out-contents-of-script-element.md)
    - [`script`要素を動的に生成するテクニックを使わない](dont-use-script-injected-script-element.md)
- その他
    - [一貫した量でインデントする](indent-consistently.md)
    - [内部リンクには絶対パスを使う](use-absolute-path-for-internal-links.md)
    - [外部リソースにはプロトコル相対URLを使わない](dont-use-protocol-relative-url-for-external-resources.md)


寄稿者
------

[@hail2u]


ライセンス
----------

[CC0]


[@hail2u]: https://github.com/hail2u
[CC0]:     http://creativecommons.org/publicdomain/zero/1.0/
