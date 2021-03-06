function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, View, I18nManager } from 'react-native';
import color from 'color';
import IconButton from '../IconButton';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import MaterialCommunityIcon from '../MaterialCommunityIcon';

/**
 * A component to show pagination for data table.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-pagination.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const itemsPerPage = 2;
 *
 * const items = [
 *   {
 *     key: 1,
 *     name: 'Page 1',
 *   },
 *   {
 *     key: 2,
 *     name: 'Page 2',
 *   },
 *   {
 *     key: 3,
 *     name: 'Page 3',
 *   },
 * ];
 *
 * const MyComponent = () => {
 *   const [page, setPage] = React.useState(0);
 *   const from = page * itemsPerPage;
 *   const to = (page + 1) * itemsPerPage;
 *
 *   return (
 *     <DataTable>
 *       <DataTable.Pagination
 *         page={page}
 *         numberOfPages={Math.floor(items.length / itemsPerPage)}
 *         onPageChange={page => setPage(page)}
 *         label={`${from + 1}-${to} of ${items.length}`}
 *       />
 *     </DataTable>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DataTablePagination = ({
  label,
  page,
  numberOfPages,
  onPageChange,
  style,
  theme,
  ...rest
}) => {
  const labelColor = color(theme.colors.text).alpha(0.6).rgb().string();
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [styles.container, style]
  }), /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, {
      color: labelColor
    }],
    numberOfLines: 1
  }, label), /*#__PURE__*/React.createElement(IconButton, {
    icon: ({
      size,
      color
    }) => /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
      name: "chevron-left",
      color: color,
      size: size,
      direction: I18nManager.isRTL ? 'rtl' : 'ltr'
    }),
    color: theme.colors.text,
    disabled: page === 0,
    onPress: () => onPageChange(page - 1)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: ({
      size,
      color
    }) => /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
      name: "chevron-right",
      color: color,
      size: size,
      direction: I18nManager.isRTL ? 'rtl' : 'ltr'
    }),
    color: theme.colors.text,
    disabled: numberOfPages === 0 || page === numberOfPages - 1,
    onPress: () => onPageChange(page + 1)
  }));
};

DataTablePagination.displayName = 'DataTable.Pagination';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16
  },
  label: {
    fontSize: 12,
    marginRight: 44
  }
});
export default withTheme(DataTablePagination); // @component-docs ignore-next-line

export { DataTablePagination };
//# sourceMappingURL=DataTablePagination.js.map