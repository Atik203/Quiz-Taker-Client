import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

interface CertificateProps {
  name: string;
  examTitle: string;
  scorePercentage: number;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#2F855A",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  content: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
  },
  signature: {
    fontSize: 12,
    marginTop: 50,
    textAlign: "center",
  },
});

export function Certificate({
  name,
  examTitle,
  scorePercentage,
}: CertificateProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>Certificate of Completion</Text>
          <Text style={styles.title}>This is to certify that</Text>
          <Text style={styles.content}>{name}</Text>
          <Text style={styles.title}>
            has successfully completed the course
          </Text>
          <Text style={styles.content}>{examTitle}</Text>
          <Text style={styles.title}>with a score of</Text>
          <Text style={styles.content}>{scorePercentage}%</Text>
          <Text style={styles.signature}>
            John Smith
            {"\n"}
            CEO, Quiz Taker
          </Text>
        </View>
      </Page>
    </Document>
  );
}
