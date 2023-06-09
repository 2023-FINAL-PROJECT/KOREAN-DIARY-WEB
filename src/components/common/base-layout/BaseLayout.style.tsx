import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.section<{ hasPadding?: boolean }>`
  flex: 1;
  display: flex;
  padding: ${({ hasPadding }) => (hasPadding ? '1rem' : 0)};
`
