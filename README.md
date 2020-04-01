# fly
前端各种工具，各种demo

## [主站](https://eelve.com)

A human being,who loves football and music. 

## [bootstrap-select](bootstrap-select/index.html)

bootstrap-select实现的demo。

## [iDataV](iDataV/index.html)

数据可视化模板，主要利用ECharts实现，另外还可以通过第三方服务来快速实现，如阿里云DataV、腾讯云图、百度Sugar等。

本模块包含18个案例。 

## [JQuery-SearchableSelect](JQuery-SearchableSelect/index.html)

jquery.searchableSelect实现的下拉搜索组件，修复了change事件：

```
  selectItem: function(item){
      if(this.hasCurrentSelectedItem())
        this.currentSelectedItem.removeClass('selected');

      this.currentSelectedItem = item;
      item.addClass('selected');

      this.hoverItem(item);

      this.holder.text(item.text());
      var value = item.data('value');
      this.holder.data('value', value);
      this.element.val(value);
      this.element.trigger('change');

      if(this.options.afterSelectItem){
        this.options.afterSelectItem.apply(this);
      }
    }
```

在源代码的基础上添加了绑定事件，触发**change**事件

```
this.element.trigger('change');
```

## [Bootstrap3Nav](Bootstrap3Nav/index.html)

漂亮优雅的Bootstrap侧边栏导航

## [tablesMergeCell](tablesMergeCell/index.html)

动态表格合并案例

# License
Released under the [MIT](LICENSE) License.
