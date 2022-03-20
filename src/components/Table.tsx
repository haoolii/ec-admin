import React, {
  ReactElement,
  ReactNode,
} from 'react';

export interface Column<T> {
  key: string;
  title: ReactNode | ReactNode[];
  render?: (value: any, record: T, index: number) => ReactNode | ReactNode[];
}

export interface Props<T> {
  columns: Column<T>[];
  dataSource: T[];
}

type DefaultRecordType = Record<string, any>;
export default function Table<T extends DefaultRecordType>({
  columns,
  dataSource,
}: Props<T>): ReactElement {
  return (
    <div>
      <table>
        {!!dataSource?.length && (
          <>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key}>{column.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataSource.map((record, index) => (
                <tr key={index}>
                  {columns.map((column, subIndex) => (
                    <td key={subIndex}>
                      {column.render
                        ? column.render(record[column.key], record, index)
                        : record[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}
