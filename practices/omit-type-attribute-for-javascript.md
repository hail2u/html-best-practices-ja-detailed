# JavaScriptでは`type`属性を省略する

HTMLでは、`script`要素における`type`属性の初期値は`text/javascript`です。

悪い例:

    <script type="text/javascript">
      ...
    </script>

良い例:

    <script>
      ...
    </script>

「[CSSの`type`属性は省略する](omit-type-attribute-for-css.ja.md)」を参照してください。
